import React, { useState } from 'react'
import Timer from '../../components/utilts/Timer'
import IdPasswordFoundView from './IdPasswordFoundView'
import './SearchIdScreen.css'

function SearchIdScreen(props) {
  const [isSearchCheck, setIsSearchCheck] = useState(true)
  const [isNextBtn, setIsNextBtn] = useState(true)
  const [isEmailCertification, setIsEmailCertification] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [userId, setUserId] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isBoxExpanded, setIsBoxExpanded] = useState(false)

  const checkTimeOut = () => {
    setIsNextBtn(!isNextBtn)
    alert('시간이 초과되었습니다.')
  }

  const checkEmailInput = () => {
    return isNextBtn ? (
      <div></div>
    ) : (
      <div>
        <div className="timerContainer">
          <p className="emailCodeVerification__note">
            *이메일로 전송된 코드를 입력해주세요.
          </p>
          <div className="timeSection">
            <p>남은 시간</p>
            <Timer timeOut={() => checkTimeOut()} style={{ color: 'blue' }} />
          </div>
        </div>
        <input
          className="emailCodeVerification__input"
          value={emailCode}
          onChange={(e) => setEmailCode(e.target.value)}
        />
      </div>
    )
  }

  const handleExpand = () => {
    setIsExpanded(true)
    foundId()
  }

  const foundId = () => {
    setIsBoxExpanded(true)
    if (isNextBtn) {
      setIsNextBtn(!isNextBtn)
      return
    }
  }

  const handleIdFindClick = () => {
    setIsSearchCheck(true)
    setIsBoxExpanded(false)
    setIsExpanded(false)
    searchTypeChange()
  }
  const handlePwFindClick = () => {
    setIsSearchCheck(false)
    setIsBoxExpanded(false)
    setIsExpanded(false)
    searchTypeChange()
  }

  const handleNextClick = () => {
    setIsBoxExpanded(true)
    foundId()
  }
  const boxClassName = isBoxExpanded
    ? 'searchIdScreen expanded'
    : 'searchIdScreen'
  const searchEmail = () => (
    <div className="emailSearch">
      <p className="emailSearch__note">*인증받은 이메일을 입력해주세요</p>
      <input
        className="emailSearch__input"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      {checkEmailInput()}
      <button className="emailSearch__button" onClick={handleExpand}>
        다음
      </button>
    </div>
  )

  const searchTypeChange = () => {
    setIsEmailCertification(true)
    setIsNextBtn(true)
    setUserEmail('')
    setEmailCode('')
    setUserId('')
  }

  return (
    <div className="searchIdScreenContainer">
      <div className={boxClassName}>
        <div className={`searchIdScreen ${isExpanded ? 'expanded' : ''}`}>
          <div className="searchIdScreen__header">
            <h3
              className={isSearchCheck ? 'active' : ''}
              onClick={() => {
                setIsSearchCheck(true)
                searchTypeChange()
                handleIdFindClick()
              }}
            >
              아이디 찾기
            </h3>
            <h3
              className={!isSearchCheck ? 'active' : ''}
              onClick={() => {
                setIsSearchCheck(false)
                searchTypeChange()
                handlePwFindClick()
              }}
            >
              비밀번호 찾기
            </h3>
          </div>
          {isEmailCertification ? (
            searchEmail()
          ) : (
            <IdPasswordFoundView
              userId={userId}
              email={userEmail}
              searchType={isSearchCheck}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchIdScreen
