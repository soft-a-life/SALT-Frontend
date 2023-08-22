import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import logoImage from '../img/logo2.png'
import { useCookies } from 'react-cookie'

function NavigationBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['loginToken'])

  const loggedOut = () => {
    return (
      <Link to="/loginScreen">
        <button className="login-button">로그인</button>
      </Link>
    )
  }
  const registerCheck = () => {
    return cookies.loginToken ? (
      <button
        className="LoginOut-button"
        onClick={() => removeCookie('loginToken')}
      >
        로그아웃
      </button>
    ) : (
      <Link to="/signUpScreen">
        <button className="Register-button">회원가입</button>
      </Link>
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
            <button className="menu-item">SAL</button>
            <button className="menu-item">개발자들</button>
          </div>
          <div className="menu-option">
            {cookies.loginToken ? <p>{cookies.userDate.user_Id}</p> : loggedOut()}
            {registerCheck()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
