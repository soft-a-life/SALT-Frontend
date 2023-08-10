import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/*
 *idPrintView() 아이디를 보영주는 영역입니다. 아이디를 감싸는 박스가 있어 div 안에 구현했습니다.
 *pwResetView()는 비밀번호를 재설정하는 영역입니다.
 * */
function IDPasswordFoundView({ searchType, userId, email }) {
  const [password, setPassword] = useState({
    user_pw: '',
    check_pw: '',
  })
  const navi = useNavigate()
  const onChange = (e) => {
    const nextForm = {
      ...password,
      [e.target.name]: e.target.value,
    }
    setPassword(nextForm)
  }
  const reRegisterBtn = () => {
    const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi
    if (
      special_pattern.test(password.user_pw) === false &&
      password.user_pw.length < 10
    ) {
      return alert('비밀번호에는 특수 문자 포함 10글자 이상이어야합니다')
    }
    if (password.user_pw === password.check_pw) {
      return alert('비밀번호가 서로 다릅니다.')
    }
    // fetch post
    fetch('http://localhost:8080/accounts/passwordReset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        user_pw: password.user_pw,
      }),
    })
      .then((res) => String(res))
      .then((res) => {
        if (res === 'success message') {
          navi('/loginScreen')
        }
      })
      .catch((err) => alert('재설정에 실패 하였습니다.'))
  }
  const pwResetView = () => {
    return (
      <div>
        <h3>새로운 비밀번호를 설정해주세요.</h3>
        <p>*10자 이상이면서 하나 이상의 특수문자를 포함해야합니다.</p>
        <input
          value={password.user_pw}
          onChange={(e) => onChange(e)}
          name={'user_pw'}
        />
        <p>*비밀번호를 다시 한번 입력해주세요</p>
        <input
          value={password.check_pw}
          onChange={(e) => onChange(e)}
          name={'check_pw'}
        />
        <button onClick={() => reRegisterBtn()}>확인</button>
      </div>
    )
  }
  const idPrintView = () => {
    return (
      <div>
        <p>이메일로 등록된 고객님의 아이디입니다.</p>
        <div>
          <p>{userId}</p>
        </div>
      </div>
    )
  }
  return <div>{searchType ? idPrintView() : pwResetView()}</div>
}

export default IDPasswordFoundView
