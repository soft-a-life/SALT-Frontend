import React from 'react'
import { useCookies } from 'react-cookie'

function TestCaseLoginAuthorization(props) {
  const [cookies] = useCookies(['accessToken', 'refreshToken'])
  try {
    fetch('http://localhost:8080/accounts/refreshToken', {
      method: 'POST',
      headers: {
        accessToken: cookies.accessToken,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {},
    })
      .then((res) => res.json())
      .then((res) => {
        return console.log(res)
      })
      .catch((e) => {
        return alert('accessToken 인증 실패')
      })
  } catch (e) {
    alert(e)
  }
}
export default TestCaseLoginAuthorization
