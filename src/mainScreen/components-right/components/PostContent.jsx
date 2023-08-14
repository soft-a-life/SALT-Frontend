import React from 'react'
import './PostContent.css'
import { Link } from 'react-router-dom'

function PostContent(props) {
  // eslint-disable-next-line react/prop-types
  const { index, contentKey, category, title, user, date, views } = props

  return (
    <Link to={`/postViewScreen/${contentKey}`}>
      <div className={'postContent'} key={index}>
        <div className={'lPost'}>
          <p>{category}</p>
          <p>{title}</p>
        </div>
        <div className={'rPost'}>
          <p>{user}</p>
          <p>{date}</p>
          <p>{views}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostContent
