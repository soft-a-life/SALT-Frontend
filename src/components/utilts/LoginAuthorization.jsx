import { useCookies } from 'react-cookie'

function LoginAuthorization() {
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken'])
  try {
    fetch('http://localhost:8080/accounts/refreshToken', {
      method: 'POST',
      headers: {
        refresh: cookies.refreshToken,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {},
    })
      .then((res) => res.json())
      .then((res) => {
        return setCookie('accessToken', res.ACCESS_TOKEN, {
          httpOnly: true,
        })
      })
      .catch((e) => {
        return alert('세션이 만료되었습니다!')
      })
  } catch (e) {
    alert(e)
  }
}

export default LoginAuthorization
