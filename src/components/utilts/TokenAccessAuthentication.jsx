import { useCookies } from 'react-cookie'

function TokenAccessAuthentication() {
  const [cookies, setCookie] = useCookies(['accessToken'])
  try {
    fetch('http://localhost:8080/accounts/refreshToken', {
      method: 'POST',
      headers: {
        refresh: cookies.accessToken,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {},
    })
      .then((res) => res.json())
      .then((res) => {
        return res.status === 201
      })
      .catch(() => {
        return alert('네트워크를 확인해 주세요')
      })
  } catch (e) {
    alert(e)
  }
}

export default TokenAccessAuthentication
