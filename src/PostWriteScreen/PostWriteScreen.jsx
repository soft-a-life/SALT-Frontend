import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import ProseMirorr from "./ProseMirorr";

function PostWriteScreen(props) {
    const {
        userObject
    } = props;

    const navi = useNavigate();

    useEffect(() => {
        if(!userObject.isLogin){
            navi("/")
            alert("로그인 후 가능합니다.");
        }
    },[])


    return (
        <div className={"PostWriteScreen"}>
            <ProseMirorr />
        </div>
    );
}

export default PostWriteScreen;