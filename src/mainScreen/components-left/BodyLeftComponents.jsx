import React from 'react';
import "./BodyLeftComponents.css"

/*
NavigationBar.jsx의 menu-item과 겹침
board-contents로 수정
이미지 경로 오류 떠서 주석처리
board-title 추가
board-line 추가
board-profile 추가
board-list 추가
service-center 추가
*/

function BodyLeftComponents(props) {

    return (
        <div className={"bodyLeftComponents"}>
            <div className={"board-notice"}>
                <div className="board-title">게시판 정보</div>
                <div className="board-line"></div>
                <div className="board-profile">
                {/* <img className="profileImage" alt="profile" src={profileImage}/> */}
                    소웨</div>
                    <div className="board-line"></div>
                <div className="board-contents">내 게시글 즐겨찾기 : 312</div>
            </div>
            <div className={"board-list"}>
                <div className="board-title">게시판 목록</div>
                <div className="board-line"></div>
                <div className="board-contents">전체 게시글</div>
                <div className="board-contents">즐겨찾기</div>
                <div className="board-contents">인기 게시글</div>
                <div className="board-contents">AI 인공지능 게시글</div>
                <div className="board-contents">가입인사 게시글</div>
            </div>
            <div className={"service-center"}>
                <div className="board-title">고객센터</div>
                <div className="board-line"></div>
                <div className="board-contents">Q&A</div>
                <div className="board-contents">1:1 상담</div>
                <div className="board-contents">신고하기</div>
            </div>
        </div>
    );
}

export default BodyLeftComponents;