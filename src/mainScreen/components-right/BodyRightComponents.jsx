import React, { useEffect, useState } from 'react'
import './BodyRightComponents.css'
import PostContent from './components/PostContent'
import { Link } from 'react-router-dom'
import robotlogo from '../../img/sal_logo.png'

const notification = [
  {
    postNum: '000',
    category: '공지',
    title: '공지공지공지공지공지공지',
    user: 'SAL',
    date: '2023.01.12',
    views: 0,
  },
]

function BodyRightComponents(props) {
  const [content, setContent] = useState([])
  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {
    //테스트용 데이터
    const postContent = [
      {
        postNum: '001',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트1',
        user: 'kym',
        date: '2023.01.12',
        views: 231,
      },
      {
        postNum: '002',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트2',
        user: 'kym',
        date: '2023.01.12',
        views: 21,
      },
      {
        postNum: '003',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트3',
        user: 'kym',
        date: '2023.01.12',
        views: 201,
      },
      {
        postNum: '004',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트4',
        user: 'kym',
        date: '2023.01.12',
        views: 271,
      },
      {
        postNum: '005',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트5',
        user: 'kym',
        date: '2023.01.12',
        views: 31,
      },
      {
        postNum: '006',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트6',
        user: 'kym',
        date: '2023.01.12',
        views: 121,
      },
      {
        postNum: '007',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트7',
        user: 'kym',
        date: '2023.01.12',
        views: 23,
      },
      {
        postNum: '008',
        category: 'java',
        title: '자바 기초 상속 강좌 영상 파트8',
        user: 'kym',
        date: '2023.01.12',
        views: 200,
      },
    ]

    setContent(postContent)
  }, [])

  const notificationPost = () => {
    return notification.map((e, index) => {
      return (
        <PostContent
          key={index}
          contentKey={e.postNum}
          category={e.category}
          title={e.title}
          user={e.user}
          date={e.date}
          views={e.views}
        />
      )
    })
  }
  const post = () => {
    return content.map((e, index) => {
      return (
        <PostContent
          key={index}
          contentKey={e.postNum}
          category={e.category}
          title={e.title}
          user={e.user}
          date={e.date}
          views={e.views}
        />
      )
    })
  }

  return (
    <div className={'bodyRightComponents'}>
      <div className={'board-important'}>
        <img className="robotlogo" alt="robotlogo" src={robotlogo} />
        <div className="importantBox">
          <div className="importantTitle">SALT 게시판 중요사항</div>
          <div className="importantText">1. 중요 공지사항</div>
          <div className="importantText">2. 게시판 이용 규정</div>
          <div className="importantText">3. 광고 및 홍보 금지</div>
        </div>
      </div>
      <h1>전체 게시글</h1>
      <div className="all-line"></div>
      <div className={'componentHeader'}>
        <p>{content.length}개의 글</p>
        <div style={{ display: 'flex' }}>
          <input
            type="checkbox"
            checked={isCheck}
            onChange={() => {
              setIsCheck(!isCheck)
            }}
          />
          <p>공지 사항</p>
        </div>
      </div>
      <div>
        <div className={'postHeader'}>
          <b className={'title'}>제목</b>
          <div className={'rightPostHeader'}>
            <b className={'user'}>작성자</b>
            <b className={'date'}>작성일</b>
            <b className={'views'}>조회</b>
          </div>
        </div>
        {isCheck ? null : notificationPost()}
        {post()}
      </div>
      <Link to={'/postWritePage'}>
        <button>글작성</button>
      </Link>
    </div>
  )
}

export default BodyRightComponents
