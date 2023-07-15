import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./LoginScreen.css"

function LoginScreen({loginBtn}) {

    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    const changeId = (e) => {
        setUserId(e.target.value)
    }
    const changePw = (e) => {
        setUserPw(e.target.value)
    }
    const loginConstraints = () => {
        // 유효성 검사 추가해야 함
        loginBtn(userId)
        navigate("/")
    }


    return (
        <div className={"loginScreen"}>
            <div>
                <input value={userId}
                       onChange={(e) => changeId(e)}
                       placeholder={"id"}/>
                <input value={userPw}
                       onChange={(e) => changePw(e)}
                       placeholder={"pw"}/>
                <button onClick={() => loginConstraints()}>로그인</button>
            </div>
            <div style={{marginTop: 10}}>
                <Link to={'/loginPage/signUpPage'}>
                    <button>회원가입</button>
                </Link>
                <button>id/pw 찾기</button>
            </div>
        </div>
    );
}

export default LoginScreen;