import React from 'react'
import { useCookies } from 'react-cookie'

function LoginAuthorization(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['loginToken'])
  try {
    fetch('http://localhost:8080/accounts/refreshToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(cookies.loginToken),
    })
      .then((res) => {
        return true
      })
      .catch((e) => {
        return false
      })
  } catch (e) {
    alert(e)
  }
}

export default LoginAuthorization
