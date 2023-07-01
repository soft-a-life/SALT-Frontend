import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"
import logoImage from '../img/logo.png';

function NavigationBar(userObject,logOut) {

    const loggedOut = () => {
        return <Link to="/loginPage">
            <button className="login-button">로그인</button>
        </Link>
    }

    const registerCheck = () => {
        return userObject.userObjet.isLogin ?
            <button className="LoginOut-button">로그아웃</button> :
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
                {userObject.userObjet.isLogin ?  <p>{userObject.userObjet.userId}</p> : loggedOut()}
                {registerCheck()}
            </div>
        </div>
    );
}

export default NavigationBar;
