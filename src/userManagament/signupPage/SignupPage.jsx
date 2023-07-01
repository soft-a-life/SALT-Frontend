import React, {useState} from 'react';
import TodayTimeFormal from "../../components/TodayTimeFormal";

/*
*  최초 작성일 : 23.06.23
*  작성자 : 김영민
*  기능명세 : 회원가입
* */
function SingUpPage(props) {
    const [userId , setUserId] = useState("");
    const [userPw , setUserPw] = useState("");
    const [userEmail , setUserEmail] = useState("");
    const [userName , setUserName] = useState("");
    const [userInformation , setUserInformation] = useState({
        user_id : "",
        user_name : "",
        user_email : "",
        user_password : "",
        user_registered_day : ""
    });

    const registerBtn = () => {
        //제약조건 검사
        setUserInformation({
            user_id : userId,
            user_name : userName,
            user_email : userEmail,
            user_password : userPw,
            user_registered_day : TodayTimeFormal()
        })
        console.log(userInformation)

        //post 던지기
    }

    return (
        <div>
            <input value={userId}
                   onChange={(e) => {setUserId(e.target.value)}}
                   placeholder={"아이디"}/>
            <input value={userName}
                   onChange={(e) => {setUserName(e.target.value)}}
                   placeholder={"이름"}/>
            <input value={userEmail}
                   onChange={(e) => {setUserEmail(e.target.value)}}
                   placeholder={"이메일"}/>
            <input value={userPw}
                   onChange={(e) => {setUserPw(e.target.value)}}
                   placeholder={"비밀번호"}/>
            <button onClick={() => registerBtn()}>회원가입</button>
        </div>
    );
}

export default SingUpPage;