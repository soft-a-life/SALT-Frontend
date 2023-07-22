import React from 'react';
import {useParams} from "react-router-dom";
import './PostViewScreen.css';

function PostViewScreen(props) {
    const {user} = useParams();



    return (
        <div className={'postViewScreen'}>
            <p>{user}</p>
        </div>
    );
}

export default PostViewScreen;