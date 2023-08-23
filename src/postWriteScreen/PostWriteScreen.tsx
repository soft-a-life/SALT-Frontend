import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import WEditor from './WEditor'
import { useCookies } from 'react-cookie'
import './PostWriteScreen.css'
import TokenAccessAuthentication from '../components/utilts/TokenAccessAuthentication'

const { useEffect, useState } = React
type CategoryItem = {
  id: number
  name: string
}
const categories: CategoryItem[] = [
  { id: 1, name: '#html, css' },
  { id: 2, name: '#javaScript' },
  { id: 3, name: '#react' },
  { id: 4, name: '#vue.js' },
  { id: 5, name: '#AngularJS' },
  { id: 6, name: '#PHP' },
  { id: 7, name: '#Node.js' },
  { id: 8, name: '#C++' },
  { id: 9, name: '#Java' },
  { id: 10, name: '#Python' },
]
function PostWriteScreen() {
  const [cookies] = useCookies(['accessToken'])
  const navi = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | any>(
    localStorage.getItem('category'),
  )
  useEffect(() => {
    if (!TokenAccessAuthentication) {
      navi('/')
      alert('로그인 후 가능합니다.')
    }
  }, [])
  const handleCategoryClick = (category: CategoryItem) => {
    localStorage.setItem('category', JSON.stringify(category))
    setSelectedCategory(category)
  }
  const editorCompleted = () => {
    if (!localStorage.getItem('category')) {
      return alert('카테고리를 선택해주세요')
    }
    const category: any = localStorage.getItem('category')
    const content: any = localStorage.getItem('remirror-editor-content')
    const completed: any = [JSON.parse(category), JSON.parse(content)]
    fetch('http://localhost:8080/postCompleted', {
      method: 'POST',
      headers: {
        accessToken: cookies.accessToken,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: completed,
    })
      .then((res) => {
        if (res.status === 201) {
          alert('성공적으로 서버에 저장했습다.')
          window.localStorage.removeItem('remirror-editor-content')
          navi('/')
        }
      })
      .catch(() => {
        alert('서버와 정상적인 통신에 실패했습니다.')
      })
  }
  return (
    <div className={'PostWriteScreen'}>
      <div>
        <h1>카테고리 목록</h1>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory?.id === category.id ? 'selected' : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <div>
            <h2>선택된 카테고리</h2>
            <p>{selectedCategory.name}</p>
          </div>
        )}
      </div>
      <WEditor />
      <button onClick={() => editorCompleted()}>작성 완료</button>
    </div>
  )
}

export default PostWriteScreen
