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
            method : "GET",
            headers : {
                "Content-Type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .then(res => {
                if(res.user_Id === form.user_Id){
                    setCookie('userDate', {
                        user_NickName : res.user_NickName,
                        user_Id : res.user_Id,
                        user_Pw : res.user_Pw
                    })
                    navi("/")
                }
            })
            .catch( err =>
                alert("로그인에 실패 하였습니다.")
            )
    }


    return (
        <div className={"loginScreen"}>
            <div>
                <input value={form.user_Id}
                       onChange={(e) => onChange(e)}
                       placeholder={"id"}/>
                <input value={form.userPw}
                       onChange={(e) => onChange(e)}
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