import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

/*
*  최초 작성일 : 23.07.06
*  작성자 : 김영민
*  기능명세 : 글 작성
* */
function PostWriteScreen(props) {
    const {
        userObject
    } = props;
    const navi = useNavigate();

    console.log(userObject.isLogin);
    useEffect(() => {
        if(!userObject.isLogin){
            navi("/")
            alert("로그인 후 가능합니다.");
        }
    },[])
    return (
        <div>

        </div>
    );
}

export default PostWriteScreen;