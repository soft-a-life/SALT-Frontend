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
import { useCookies } from 'react-cookie'

interface ProseMirrorJSON {
  type: string
  content?: ProseMirrorJSON[]
  src?: string
  alt?: string
  processed?: boolean
}
type ImageNode = {
  type: string
  attrs: JSON
  processed?: boolean
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
const WEditor = (): React.JSX.Element => {
  const [cookies, setCookie, removeCookies] = useCookies(['accessToken'])
  const extensions = () => [new FigcaptionExtension()]
  const STORAGE_KEY = 'remirror-editor-content'
  const { manager, state, onChange } = useRemirror({
    extensions,
  })
  const imageUpdate = (imageNode: ProseMirrorJSON): any => {
    let imageDefine: ImageNode
    if (imageNode.processed) {
      return null
    }
    fetch('http://localhost:8080/imageUpload', {
      method: 'POST',
      headers: cookies,
      body: JSON.stringify(imageNode),
    })
      .then((res) => {
        res
          .json()
          .then((res) => {
            imageDefine.type = 'image'
            imageDefine.processed = true
            imageDefine.attrs = res
          })
          .then(() => {
            return imageDefine
          })
      })
      .catch((e) => {
        alert('이미지 처리에 오류가 발생했습니다.')
      })
  }
  const extractImageNodes = (data: ProseMirrorJSON[]): ProseMirrorJSON[] => {
    const imageNodes: ProseMirrorJSON[] = []

    data.forEach((node, index) => {
      if (node.type === 'image') {
        data[index] = imageUpdate(node)
      }
      if (node.content) {
        const childImageNodes = extractImageNodes(node.content)
        imageNodes.push(...childImageNodes)
      }
    })
    return imageNodes
  }

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    const imageNodes = extractImageNodes([json])
    localStorage.setItem(STORAGE_KEY, JSON.stringify(imageNodes))
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
