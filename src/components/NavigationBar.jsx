import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar(userObject) {

    const loggedOut = () => {
        return <Link to="/loginPage">
            <button className="login-button">로그인</button>
        </Link>
    }

    return (
        <div className={"navigationBar"}>
            <Link to={'/'}>
                <div className={"logo-container"}>
                    로고 자리
                </div>
            </Link>
            <div className="special-menu">
                <button className="menu-item">메뉴1</button>
                <button className="menu-item">메뉴2</button>
                {userObject.userObjet.isLogin ?  <p>{userObject.userObjet.userId}</p> : loggedOut()}
                <Link to="/loginPage/signUpPage">
                    <button className="Register-button">회원가입</button>
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;
