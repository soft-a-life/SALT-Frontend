import React, {useState} from 'react';

/*
*  최초 작성일 : 23.06.23
*  작성자 : 김영민
*  기능명세 : 회원가입
* */
function SingUpPage(props) {
    const [userInformation , setUserInformation] = useState({
        id : "",
        pw : "",
        email : "",
        name : "",
        date : ""
    });
    return (
        <div>
            <input placeholder={"아이디"}/>
            <input placeholder={"이름"}/>
            <input placeholder={"이메일"}/>
            <input placeholder={"비밀번호"}/>
            <button>회원가입</button>
        </div>
    );
}

export default SingUpPage;