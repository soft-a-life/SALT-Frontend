import React, { useState } from 'react'
import './Header.css'
import mainImage from '../img/main.jpg'

function Header(props) {
  const [imageVisible, setImageVisible] = useState(true)

  const removeImage = () => {
    setImageVisible(false)
  }

  return (
    <div className={'header'}>
      <div className={'main-container'}>
        {imageVisible && (
          <div>
            <img
              className="mainImage"
              alt="main"
              src={mainImage}
              width="100%"
              height="780px"
            />
            <div className="hideImg">
              <button className="hideText" onClick={removeImage}>
                <p className="xText">X</p>
                이미지 없애기
              </button>
            </div>
            <div className="title-main">
              <div className="mainPhototext">개발, AI 인공지능, 보안</div>
              <div className="mainPhototext">소프트웨어에 대한 모든 것</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
