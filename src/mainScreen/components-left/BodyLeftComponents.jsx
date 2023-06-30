import React from 'react';
import "./BodyLeftComponents.css"

function BodyLeftComponents(props) {
    return (
        <div className={"bodyLeftComponents"}>
            <div className="menu-item">전체 글 보기</div>
            <div className="menu-item">실시간 인기글</div>
        </div>
    );
}

export default BodyLeftComponents;