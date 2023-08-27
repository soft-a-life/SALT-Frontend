import React, { useState, useRef } from 'react'
import './SignUpScreen.css'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    nickname: '',
    email: '',
  })

  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCheckUsername = () => {
    // 이곳에 아이디 중복 확인 로직을 작성
    // 중복 확인 로직이 완료되면 setIsUsernameAvailable(true/false)를 설정
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.username || !formData.password) {
      setErrorMessage('아이디와 비밀번호를 입력하세요.')
    } else {
      setErrorMessage('')
      console.log('Form submitted:', formData)
    }
  }

  return (
    <div className="sign-up-form-container">
      <form className="sign-up-form" onSubmit={handleSubmit} ref={formRef}>
        <div className="Title_">
          <div>회원가입</div>
        </div>
        <div className="SubTitle_">
          <div>회원이 되어 더 많은 서비스를 경험하세요!</div>
        </div>
        <div className="content_">*은 필수 입력란 입니다.</div>
        <div className="ID-form">
          <div className="label_" htmlFor="username">
            아이디
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디를 입력하세요."
              value={formData.username}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="check-username-button"
              onClick={handleCheckUsername}
            >
              중복확인
            </button>
          </div>
          {!isUsernameAvailable && <p>이미 사용 중인 아이디입니다.</p>}
        </div>
        <div className="form-group">
          <div className="label_" htmlFor="password">
            비밀번호
            <span style={{ color: '#ff0000' }}>*</span>
          </div>
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
          <div className="label_" htmlFor="name">
            이름
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력하세요."
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="label_" htmlFor="nickname">
            닉네임
          </div>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력하세요."
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <div className="label_" htmlFor="email">
            이메일
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력하세요."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="sign-up_button">
            회원가입
          </button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  )
}

export default SignUpForm
