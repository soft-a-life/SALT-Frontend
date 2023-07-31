import { EditorState, Plugin } from 'prosemirror-state'
import { EditorView, Decoration, DecorationSet } from 'prosemirror-view'
import { Schema, DOMParser } from 'prosemirror-model'
import { schema } from 'prosemirror-schema-basic'
import { addListNodes } from 'prosemirror-schema-list'
import { exampleSetup } from 'prosemirror-example-setup'
import { useEffect, useRef } from 'react'
import './ProseMirror.css'
import { uploadFile } from 'remirror'

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks,
})

const doc = DOMParser.fromSchema(mySchema).parse(document.createElement('div'))

const plugins = exampleSetup({ schema: mySchema })

export function Editor() {
  const editorRef = useRef(null)
  const editorDom = useRef(null)

  useEffect(() => {
    if (editorRef.current) return
    editorRef.current = new EditorView(editorDom.current, {
      state: EditorState.create({ doc, plugins }),
    })
  }, [])

  let placeholderPlugin = new Plugin({
    state: {
      init() {
        return DecorationSet.empty
      },
      apply(tr, set) {
        // Adjust decoration positions to changes made by the transaction
        set = set.map(tr.mapping, tr.doc)
        // See if the transaction adds or removes any placeholders
        let action = tr.getMeta(this)
        if (action && action.add) {
          let widget = document.createElement('placeholder')
          let deco = Decoration.widget(action.add.pos, widget, {
            id: action.add.id,
          })
          set = set.add(tr.doc, [deco])
        } else if (action && action.remove) {
          set = set.remove(
            set.find(null, null, (spec) => spec.id === action.remove.id),
          )
        }
        return set
      },
    },
    props: {
      decorations(state) {
        return this.getState(state)
      },
    },
  })
  function findPlaceholder(state, id) {
    let decos = placeholderPlugin.getState(state)
    let found = decos.find(null, null, (spec) => spec.id === id)
    return found.length ? found[0].from : null
  }
  document
    .querySelector('#image-upload')
    .addEventListener('change', (e, view) => {
      if (
        view.state.selection.$from.parent.inlineContent &&
        e.target.files.length
      )
        startImageUpload(view, e.target.files[0])
      view.focus()
    })

  function startImageUpload(view, file) {
    // A fresh object to act as the ID for this upload
    let id = {}

    // Replace the selection with a placeholder
    let tr = view.state.tr
    if (!tr.selection.empty) tr.deleteSelection()
    tr.setMeta(placeholderPlugin, { add: { id, pos: tr.selection.from } })
    view.dispatch(tr)

    uploadFile(file).then(
      (url) => {
        let pos = findPlaceholder(view.state, id)
        // If the content around the placeholder has been deleted, drop
        // the image
        if (pos == null) return
        // Otherwise, insert it at the placeholder's position, and remove
        // the placeholder
        view.dispatch(
          view.state.tr
            .replaceWith(pos, pos, schema.nodes.image.create({ src: url }))
            .setMeta(placeholderPlugin, { remove: { id } }),
        )
      },
      () => {
        // On failure, just clean up the placeholder
        view.dispatch(tr.setMeta(placeholderPlugin, { remove: { id } }))
      },
    )
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div id="editor" ref={editorDom} />
}

export default Editor
