import React, { useState } from 'react'
import './SignUpScreen.css'

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    nickname: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기서 폼 데이터를 서버로 전송하는 로직을 작성합니다.
    console.log(formData)
  }

  return (
    <div className="sign-up-form-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="username">
            아이디
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력하세요."
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력하세요."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="nickname">
            닉네임
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력하세요."
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpScreen
