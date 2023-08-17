import React, { useState } from 'react'
import TodayTimeFormal from '../../components/utilts/TodayTimeFormal'
import { useNavigate } from 'react-router-dom'

function SingUpPage(props) {
  const navi = useNavigate()
  const [form, setForm] = useState({
    userId: '',
    userPw: '',
    userName: '',
    userEmail: '',
    userNickName: '',
    registerDate: TodayTimeFormal(),
  })

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextForm)
  }
  const registerBtn = () => {
    const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi

    if (form.userId.length < 4 && form.userId.length > 30) {
      return alert('아이디는 4글자 이상이거나 30글자 이하만 가능합니다.')
    }
    if (
      special_pattern.test(form.userPw) === false &&
      form.userPw.length < 10
    ) {
      return alert('비밀번호에는 특수 문자 포함 10글자 이상이어야합니다')
    }
    if (form.userName.length < 1) {
      return alert('이름을 입력해주세요')
    }

    const nextForm = {
      ...form,
      registerDate: TodayTimeFormal(),
    }
    setForm(nextForm)

    // fetch post
    fetch('http://localhost:8080/accounts/singup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(form),
    })
      .then((res) => String(res))
      .then((res) => {
        if (res === 'success message') {
          alert('회원가입이 정상적으로 완료 되었습니다.')
          navi('/login')
        }
      })
      .catch((err) => alert('회원가입에 실패 하였습니다.'))
  }

  return (
    <div>
      <input
        value={form.userId}
        name={'userId'}
        onInput={(e) => {
          e.target.value.replace(/[^\\!-z]/gi, '')
        }}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={'아이디'}
      />
      <input
        value={form.userPw}
        name={'userPw'}
        onInput={(e) => {
          e.target.value.replace(/[^\\!-z]/gi, '')
        }}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={'비밀번호'}
      />
      <input
        value={form.userName}
        name={'userName'}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={'이름'}
      />
      <input
        value={form.userNickName}
        name={'userNickName'}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={'닉네임'}
      />
      <input
        value={form.userEmail}
        name={'userEmail'}
        onChange={(e) => {
          onChange(e)
        }}
        placeholder={'이메일'}
      />
      <button onClick={() => registerBtn()}>회원가입</button>
    </div>
  )
}

export default SingUpPage
