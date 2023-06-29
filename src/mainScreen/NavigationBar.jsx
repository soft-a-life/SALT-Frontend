import React from 'react';
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
                <button className="login-button">로그인</button>
            </div>
        </div>
    );
}

export default NavigationBar;