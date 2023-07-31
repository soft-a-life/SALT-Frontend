import React from 'react'
import './Header.css'
import mainImage from '../img/main.jpg'

/*
임시 main.jpg 추가
return문 안에
main-container 추가
maingImage 추가
BodyRightComponents.jsx의 title과 id값 겹침
*/

/*
이미지 높이 값 780px로 수정
title id > title-main으로 수정
title-main안에 mainPhototext 추가
title-main main-container 안으로 변경
*/

function Header(props) {
  return (
    <div className={'header'}>
      <div className={'main-container'}>
        <img
          className="mainImage"
          alt="main"
          src={mainImage}
          width="100%"
          height="780px"
        />
        <div className="title-main">
          <div className="mainPhototext">개발, AI 인공지능, 보안</div>
          <div className="mainPhototext">소프트웨어에 대한 모든 것</div>
        </div>
      </div>
    </div>
  )
}

export default Header
