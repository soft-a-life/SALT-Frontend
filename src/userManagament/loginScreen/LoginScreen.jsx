import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

/*
*  최초 작성일 : 23.06.23
*  변경일 : 23.06.29
*  작성자 : 김영민
*  변경자 : 김영민
*  기능명세 : 로그인 기능
*           회원가입, id/pw 찾기 상위 컴포넌트
*  변경 내용 : 로그인 시 메인 페이지로 이동
*            사용장 아이디 네이게이션에 출력
* */
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