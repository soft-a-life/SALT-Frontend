import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"
import logoImage from '../img/logo.png';

/*
*  작성일 : 23.05.03
*  변경일 : 23.07.03
*  작성자 : 김영민
*  변경자 : 김영민
*  기능명세 : 모든 스크린과 경로, 사용자 데이터 관리
*  변경사항 : 로그아웃 기능 구현
* */
function NavigationBar(props) {
    const {
        userObject,
        logOut
    } = props;

    const init = {userId : '', isLogin : false};

    const loggedOut = () => {
        return <Link to="/loginPage">
            <button className="login-button">로그인</button>
        </Link>
    }

    const registerCheck = () => {
        return userObject.isLogin ?
            <button className="LoginOut-button"
            onClick={()  => logOut(init)}>로그아웃</button> :
            <Link to="/loginPage/signUpPage">
                <button className="Register-button">회원가입</button>
            </Link>
    }

    return (
        <div className={"navigationBar"}>
            <Link to={'/'}>
                <div className={"logo-container"}>
                    <img className="logoImage" alt="logo" src={logoImage} />
                </div>
            </Link>
            <div className="special-menu">
                <button className="menu-item">메뉴1</button>
                <button className="menu-item">메뉴2</button>
                {userObject.isLogin ?  <p>{userObject.userId}</p> : loggedOut()}
                {registerCheck()}
            </div>
        </div>
    );
}

export default NavigationBar;
