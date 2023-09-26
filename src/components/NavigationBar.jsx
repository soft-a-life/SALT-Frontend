import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import logoImage from '../img/logo2.png'
import { useCookies } from 'react-cookie'
import TokenRefresh from './utilts/TokenRefresh'

function NavigationBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken'])

  const loggedOut = () => {
    return cookies.accessToken ? (
      <button onClick={() => TokenRefresh()}>로그인 연장</button>
    ) : (
      <Link to="/loginScreen">
        <button className="login-button">로그인</button>
      </Link>
    )
  }
  const registerCheck = () => {
    return cookies.accessToken ? (
      <button
        className="LoginOut-button"
        onClick={() => removeCookie('accessTokenToken')}
      >
        로그아웃
      </button>
    ) : (
      <div className={'naviBlank'}></div>
    )
  }
  return (
    <div className="naviLine">
      <div className={'navigationBar'}>
        <Link to={'/'}>
          <div className={'logo-container'}>
            <img
              className="logoImage"
              alt="logo"
              src={logoImage}
              height="60px"
            />
          </div>
        </Link>
        <div className="special-menu">
          <div className="menu-list">
            <div className="hover-box">
              <button className="menu-item">SAL</button>
              <button className="menu-hover">
                공사중!<span class="hover-cross">X</span>
              </button>
            </div>
            <div className="hover-box">
              <button className="menu-item">개발자들</button>
              <button className="menu-hover">공사중!</button>
            </div>
          </div>
          <div className="menu-option">
            {cookies.loginToken ? (
              <p>{cookies.userDate.user_Id}</p>
            ) : (
              loggedOut()
            )}
            {registerCheck()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
