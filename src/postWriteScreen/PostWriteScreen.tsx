import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginAuthorization from '../components/utilts/LoginAuthorization'
import WEditor from './WEditor'

const { useEffect, useState } = React
function PostWriteScreen() {
  const navi = useNavigate()
  const [category, setCategory] = useState({
    main: '',
    sub: '',
  })
  useEffect(() => {
    if (!LoginAuthorization) {
      navi('/')
      alert('로그인 후 가능합니다.')
    }
  }, [])
  return (
    <div className={'PostWriteScreen'}>
      <WEditor />
      <button>작성 완료</button>
    </div>
  )
}

export default PostWriteScreen
