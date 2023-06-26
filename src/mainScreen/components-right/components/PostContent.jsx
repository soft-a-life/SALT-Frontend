import React from 'react';
import "./PostContent.css"
import {Link} from "react-router-dom";

function PostContent(props) {

    const {
        index,
        contentKey,
        category,
        title,
        user,
        date,
        views,
        onPostCheck
    } = props;

    return (
        <Link to={`/postViewPage/${contentKey}`}>
            <div className={"postContent"} key={index} onClick={() => onPostCheck(contentKey)}>
                    <div className={"lPost"}>
                        <p>{category}</p>
                        <p>{title}</p>
                    </div>
                    <div className={"rPost"}>
                        <p>{user}</p>
                        <p>{date}</p>
                        <p>{views}</p>
                    </div>
            </div>
        </Link>
    );
}

export default PostContent;