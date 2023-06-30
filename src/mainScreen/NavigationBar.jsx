import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar(props) {
    return (
        <div className={"navigationBar"}>
            <div className={"logo-container"}>
                로고 자리
            </div>
            <div className="special-menu">
                <button className="menu-item">메뉴1</button>
                <button className="menu-item">메뉴2</button>
                <Link to="/login">
                    <button className="login-button">로그인</button>
                </Link>
                <button className="Register-button">회원가입</button>
            </div>
        </div>
    );
}

export default NavigationBar;
