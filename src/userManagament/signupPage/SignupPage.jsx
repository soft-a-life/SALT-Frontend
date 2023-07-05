import React, {useEffect, useState} from 'react';
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
    const [userNickName , setNickUserName] = useState("");
    const [userInformation , setUserInformation] = useState({
        user_id : userId,
        user_name : userName,
        user_email : userEmail,
        user_password : userPw,
        user_nickname : userNickName,
        user_registered_day : TodayTimeFormal()});
    let userDate = {
        user_id : userId,
        user_name : userName,
        user_email : userEmail,
        user_password : userPw,
        user_nickname : userNickName,
        user_registered_day : TodayTimeFormal()};

    console.log(userId)

    function handleOnInput(e)  {
        e.target.value = e.target.value.replace(/[^\\!-z]/gi, '');
    }

    const registerBtn = () => {

        let special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        const defaultNickName = "anonymous"

        if(userId.length >= 4 && userId.length <= 30){
            if(special_pattern.test(userPw) === true && userPw.length >= 10){
                if (userNickName.length === 0){
                    const userDate = {
                        user_id : userId,
                        user_name : userName,
                        user_email : userEmail,
                        user_password : userPw,
                        user_nickname : defaultNickName,
                        user_registered_day : TodayTimeFormal()}

                    setUserInformation(userInformation => userInformation.value = userDate);
                    //추출 시에는 valueOf로 처리
                    console.log(userInformation.valueOf())

                }else {
                    setUserInformation(userInformation => userInformation.value = userDate);
                }
            }else {
                alert('비밀번호에는 특수 문자 포함 10글자 이상이어야합니다');
            }
        }else {
            alert("아이디는 4글자 이상이거나 30글자 이하만 가능합니다.")
        }
    }

    return (
        <div>
            <input value={userId}
                   onInput={(e) => handleOnInput(e)}
                   onChange={(e) => {setUserId(e.target.value)}}
                   placeholder={"아이디"}/>
            <input value={userPw}
                   onInput={(e) => handleOnInput(e)}
                   onChange={(e) => {setUserPw(e.target.value)}}
                   placeholder={"비밀번호"}/>
            <input value={userName}
                   onChange={(e) => {setUserName(e.target.value)}}
                   placeholder={"이름"}/>
            <input value={userNickName}
                   onChange={(e) => {setNickUserName(e.target.value)}}
                   placeholder={"닉네임"}/>
            <input value={userEmail}
                   onChange={(e) => {setUserEmail(e.target.value)}}
                   placeholder={"이메일"}/>
            <button onClick={() => registerBtn()}>회원가입</button>
        </div>
    );
}

export default SingUpPage;