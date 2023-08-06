import React, { useState } from 'react'
import Timer from '../../components/Timer'
import IdPasswordFoundView from './IdPasswordFoundView'
/*
@김준희 @박진우
checkEmailInput()는 다음 버튼을 누르면 보여지는 인증 코드를 작성하는 부분입니다.
checkEmailInput()를 실행시 나타나는 시간은 src/components/Timer.jsx에서 반환 받습니다.
searchEmail()는 아이디 찾기의 이메일 입력 폼을 보여주는 부분입니다. 아이디 찾기와 비밀번호 찾기의 디자인이 같아
코드 인증과 아이디 찾기, 비밀번호 재설정은 외부 함수로 사용할 것입니다.
idPassWordFoundView.jsx로 아이디 보여주는 영역과 비밀번호를 재설정하는 보여줍니다.
* */
function SearchIdScreen(props) {
  const [isSearchCheck, setIsSearchCheck] = useState(true)
  const [isNextBtn, setIsNextBtn] = useState(true)
  const [isEmailCertification, setIsEmailCertification] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [userId, setUserId] = useState('')
  const checkTimeOut = () => {
    setIsNextBtn(!isNextBtn)
    alert('시간이 초과되었습니다.')
  }
  const checkEmailInput = () => {
    return isNextBtn ? (
      <div></div>
    ) : (
      <div>
        <div>
          <p>*이메일로 전송된 코드를 입력해주세요.</p>
          <p>남은 시간</p>
          <Timer timeOut={() => checkTimeOut()} />
        </div>
        <input
          value={emailCode}
          onChange={(e) => setEmailCode(e.target.value)}
        />
      </div>
    )
  }
  const foundId = () => {
    if (isNextBtn) {
      return setIsNextBtn(!isNextBtn)
    }
    fetch('http://localhost:8080/accounts/foundId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsEmailCertification(!isEmailCertification)
        setUserId(res.user_id)
      })
      .catch((e) => alert(e))
  }
  const searchEmail = () => {
    return (
      <div>
        <p>*인증받은 이메일을 입력해주세요</p>
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {checkEmailInput()}
        <button onClick={() => foundId()}>다음</button>
      </div>
    )
  }
  const searchTypeChange = () => {
    setIsEmailCertification(true)
    setIsNextBtn(true)
    setUserEmail('')
    setEmailCode('')
    setUserId('')
  }
  return (
    <div>
      <div>
        <h3
          onClick={() => {
            setIsSearchCheck(true)
            searchTypeChange()
          }}
        >
          아이디 찾기
        </h3>
        <h3
          onClick={() => {
            setIsSearchCheck(false)
            searchTypeChange()
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
  )
}

export default SearchIdScreen
