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

interface ProseMirrorJSON {
  type: string
  content?: ProseMirrorJSON[]
  src?: string
  alt?: string
}
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
    }
  }
}
function extractImageNodes(data: ProseMirrorJSON[]): ProseMirrorJSON[] {
  const imageNodes: ProseMirrorJSON[] = []

  data.forEach((node) => {
    if (node.type === 'image') {
      imageNodes.push(node)
      console.log('node.type=', node)
    }
    if (node.content) {
      const childImageNodes = extractImageNodes(node.content)
      imageNodes.push(...childImageNodes)
    }
  })
  return imageNodes
}
const extensions = () => [new FigcaptionExtension()]
const STORAGE_KEY = 'remirror-editor-content'

const WEditor = (): React.JSX.Element => {
  const { manager, state, onChange } = useRemirror({
    extensions,
  })
  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    const imageNodes = extractImageNodes([json])
    console.log('imageNodes', imageNodes)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(json))
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
