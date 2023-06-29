import React from 'react';
import {useParams} from "react-router-dom";
import './PostViewScreen.css';

/*
*  최초 작성일 : 23.06.23
*  작성자 : 김영민
*  기능명세 : 선택된 글 사엣 출력하는 페이지
* */
function PostViewScreen(props) {
    const {user} = useParams();



    return (
        <div className={'postViewScreen'}>
            <p>{user}</p>
        </div>
    );
}

export default PostViewScreen;