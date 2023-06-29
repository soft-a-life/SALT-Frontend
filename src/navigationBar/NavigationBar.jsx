import React from 'react';
import "./NavigationBar.css"
import {Link} from "react-router-dom";

/*
*  작성일 : 23.05.21
*  변경일 : 23.06.29
*  작성자 : 김영민
*  변경자 : 김영민
*  기능명세 : 페이지에 적용되는 네이비게이션 바
*           외부 컴포넌트
*  변경내용 :
* */
function NavigationBar(userObject) {

    const loggedOut = () => {
       return <Link to={'/loginPage'}>
            로그인
        </Link>
    }

    return (
        <div className={"navigationBar"}>
            <div>

            </div>
            <div>
                {userObject.userObjet.isLogin ?  <p>{userObject.userObjet.userId}</p> : loggedOut()}
            </div>
        </div>
    );
}

export default NavigationBar;