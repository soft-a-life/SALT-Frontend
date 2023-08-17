import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProseMirror from './ProseMirror'
import LoginAuthorization from '../components/utilts/LoginAuthorization'

function PostWriteScreen(props) {
  const navi = useNavigate()

  useEffect(() => {
    if (!LoginAuthorization) {
      navi('/')
      alert('로그인 후 가능합니다.')
    }
  }, [])

  return (
    <div className={'PostWriteScreen'}>
      <ProseMirror />
    </div>
  )
}

export default PostWriteScreen
