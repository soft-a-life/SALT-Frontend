import React, {useEffect, useState} from 'react';
import "./BodyRightComponents.css"
import PostContent from "./components/PostContent";

function BodyRightComponents(props) {

    const [content, setContent] = useState([
        {postNum :"000", category : "공지", title : "공지공지공지공지공지공지", user : "SAL",
        date:"2023.01.12", views: 0
    }]);
    const [isCheck, setIsCheck] = useState(false)

    useEffect(()=>{
        const postContent = [
            {postNum :"001", category : "java", title : "자바 기초 상속 강좌 영상 파트1", user : "kym",
             date:"2023.01.12", views: 231
            },
            {postNum :"002", category : "java", title : "자바 기초 상속 강좌 영상 파트2", user : "kym",
                date:"2023.01.12", views: 21
            },
            {postNum :"003", category : "java", title : "자바 기초 상속 강좌 영상 파트3", user : "kym",
                date:"2023.01.12", views: 201
            },
            {postNum :"004", category : "java", title : "자바 기초 상속 강좌 영상 파트4", user : "kym",
                date:"2023.01.12", views: 271
            },
            {postNum :"005", category : "java", title : "자바 기초 상속 강좌 영상 파트5", user : "kym",
                date:"2023.01.12", views: 31
            },
            {postNum :"006", category : "java", title : "자바 기초 상속 강좌 영상 파트6", user : "kym",
                date:"2023.01.12", views: 121
            },
            {postNum :"007", category : "java", title : "자바 기초 상속 강좌 영상 파트7", user : "kym",
                date:"2023.01.12", views: 23
            },
            {postNum :"008", category : "java", title : "자바 기초 상속 강좌 영상 파트8", user : "kym",
                date:"2023.01.12", views: 200
            },
        ];
        setContent(postContent);
    }, [])

    const changeBool = (e) => {
        if(e.target.checked) {
            setIsCheck(true)
        }else{
            setIsCheck(false)
        }
        console.log(isCheck)
    }

    const onPostCheck = (e) => {
        console.log(e.postNum," 번 글 학인")
    }

    return (
        <div className={"bodyRightComponents"}>
            <h1>전체 글 보기</h1>
            <div className={"componentHeader"}>
                <p>{content.length}개의 글</p>
                <div style={{display:"flex"}}>
                    <input
                        type="checkbox"
                        checked={isCheck}
                        onChange={(e) => {changeBool(e)}}
                    />
                    <p>공지 사항</p>
                </div>
            </div>
            <div>
                {content.map((e) => {

                    console.log(e.postNum)

                    return <PostContent
                            key={e.postNum}
                            category={e.category}
                            title={e.title}
                            user={e.user}
                            date={e.date}
                            views={e.views}
                            onPostCheck={(e) => {onPostCheck(e)}}
                    />
                })}
            </div>
        </div>
    );
}

export default BodyRightComponents;