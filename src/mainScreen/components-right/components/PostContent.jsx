import React from 'react';
import "./PostContent.css"

function PostContent(props) {

    const {
        key,
        category,
        title,
        user,
        date,
        views,
        onPostCheck
    } = props;

    return (
        <div className={"postContent"} key={key}>
            <div style={{width:70+"%", display:"flex"}}>
                <p>{category}</p>
                <p>{title}</p>
            </div>
            <div style={{width:30+"%", display:"flex", justifyContent:"space-between"}}>
                <p>{user}</p>
                <p>{date}</p>
                <p>{views}</p>
            </div>
        </div>
    );
}

export default PostContent;