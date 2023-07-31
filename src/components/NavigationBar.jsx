import React from 'react'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
import logoImage from '../img/logo2.png'
import { useCookies } from 'react-cookie'

function NavigationBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['userDate'])

  const loggedOut = () => {
    return (
      <Link to="/loginScreen">
        <button className="login-button">로그인</button>
      </Link>
    )
  }
  const registerCheck = () => {
    return cookies.userDate ? (
      <button
        className="LoginOut-button"
        onClick={() => removeCookie('userDate')}
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
    <div className={'navigationBar'}>
      <Link to={'/'}>
        <div className={'logo-container'}>
          <img className="logoImage" alt="logo" src={logoImage} height="60px" />
        </div>
      </Link>
      <div className="special-menu">
        <div className="menu-list">
          <button className="menu-item">SAL</button>
          <button className="menu-item">개발자들</button>
        </div>
        <div className="blankbox"></div>
        <div className="menu-button">
          <button className="menu-item">메뉴1</button>
          <button className="menu-item">메뉴2</button>
          {cookies.userDate ? <p>{cookies.userDate.user_Id}</p> : loggedOut()}
          {registerCheck()}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
