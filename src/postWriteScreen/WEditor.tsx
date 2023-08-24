import 'remirror/styles/all.css'

import React, { useCallback } from 'react'
import {
  ApplySchemaAttributes,
  NodeExtensionSpec,
  NodeSpecOverride,
  RemirrorJSON,
} from 'remirror'
import { ImageExtension } from 'remirror/extensions'
import {
  OnChangeJSON,
  Remirror,
  ThemeProvider,
  useRemirror,
} from '@remirror/react'

class FigcaptionExtension extends ImageExtension {
  createNodeSpec(
    extra: ApplySchemaAttributes,
    override: NodeSpecOverride,
  ): NodeExtensionSpec {
    const spec = super.createNodeSpec(extra, override)

    return {
      ...spec,
      attrs: {
        ...spec.attrs,
        figcaptionText: { default: '' },
      },
      toDOM: (node) => [
        'figure',
        {
          style:
            'border: 2px solid #479e0c; padding: 8px; margin: 8px; text-align: center;',
        },
        spec.toDOM!(node),
        [
          'figcaption',
          { style: 'background-color: #3d3d3d; color: #f1f1f1; padding: 8px;' },
          node.attrs.figcaptionText,
        ],
      ],
    }
  }
}

const extensions = () => [new FigcaptionExtension()]
const STORAGE_KEY = 'remirror-editor-content'

const WEditor = (): JSX.Element => {
  const { manager, state, onChange } = useRemirror({
    extensions,
  })
  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localstorage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json))
  }, [])
  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        autoFocus
        onChange={onChange}
        initialContent={state}
        autoRender="end"
      >
        <OnChangeJSON
          onChange={(e) => {
            handleEditorChange(e)
          }}
        />
      </Remirror>
    </ThemeProvider>
  )
}

export default WEditor
