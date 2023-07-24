import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie"
import "./LoginScreen.css"

function LoginScreen() {

    const [cookies, setCookie, removeCookie] = useCookies(['userDate']);
    const navi = useNavigate();
    const [form, setForm] = useState({
        user_Id : "",
        user_Pw : ""
    });

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextForm);
    }
    const loginConstraints = () => {
        fetch("http://localhost:8080/accounts/login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .then(res => {
                if(res.user_Id === form.user_Id){
                    setCookie('userDate', {
                        user_NickName: res.user_NickName,
                        user_Id: res.user_Id,
                        user_Pw: res.user_Pw
                    })
                    navi("/")
                }
            })
            .catch(err =>
                alert("로그인에 실패 하였습니다.")
            )
    }
    return (
        <div className={"loginScreen"}>
            <h2 className="loginTitle">로그인</h2>
            <div className="inputContainer">
                <input value={form.userId}
                    onChange={(e) => onChange(e)}
                    placeholder={"아이디를 입력하세요"} />
                <input value={form.userPw}
                    onChange={(e) => onChange(e)}
                    placeholder={"비밀번호를 입력하세요"} />
            </div>
            <div className="buttonContainer">
                <button onClick={() => loginConstraints()} className="loginButton">로그인</button>
                <Link to={'/signUpPage'}>
                    <button className="signupButton">회원가입</button>
                </Link>
                <Link to={'/SignUpScreen/signUpPage'} className="findIdPwLink">아이디/비밀번호 찾기</Link>
            </div>
        </div>
    );
}

export default LoginScreen;