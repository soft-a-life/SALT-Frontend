import React, {useState} from 'react';
import TodayTimeFormal from "../../components/TodayTimeFormal";

function SingUpPage(props) {

    const [form, setForm] = useState({
        userId : '',
        userPw : '',
        userName : '',
        userEmail : '',
        userNickName : '',
        registerDate : TodayTimeFormal()
    });

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextForm);
    }

    const registerBtn = () => {
        const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

        // 제약조건 확인
        if(form.userId.length < 4 && form.userId.length > 30){
            return alert("아이디는 4글자 이상이거나 30글자 이하만 가능합니다.");
        }
        if(special_pattern.test(form.userPw) === false && form.userPw.length < 10){
            return alert('비밀번호에는 특수 문자 포함 10글자 이상이어야합니다');
        }
        if (form.userName.length < 1){
            return alert('이름을 입력해주세요');
        }

        const nextForm = {
            ...form,
            registerDate: TodayTimeFormal(),
        }
        setForm(nextForm);

        console.log(form);
        // fetch post
    }

    return (
        <div>
            <input value={form.userId}
                   name={"userId"}
                   onInput={(e) => {e.target.value.replace(/[^\\!-z]/gi, '')}}
                   onChange={(e) => {onChange(e)}}
                   placeholder={"아이디"}/>
            <input value={form.userPw}
                   name={"userPw"}
                   onInput={(e) => {e.target.value.replace(/[^\\!-z]/gi, '')}}
                   onChange={(e) => {onChange(e)}}
                   placeholder={"비밀번호"}/>
            <input value={form.userName}
                   name={"userName"}
                   onChange={(e) => {onChange(e)}}
                   placeholder={"이름"}/>
            <input value={form.userNickName}
                   name={"userNickName"}
                   onChange={(e) => {onChange(e)}}
                   placeholder={"닉네임"}/>
            <input value={form.userEmail}
                   name={"userEmail"}
                   onChange={(e) => {onChange(e)}}
                   placeholder={"이메일"}/>
            <button onClick={() => registerBtn()}>회원가입</button>
        </div>
    );
}

export default SingUpPage;