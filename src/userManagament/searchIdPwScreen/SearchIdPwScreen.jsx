import React, { useEffect, useState } from 'react'
import Timer from '../../components/Timer'
/*
@김준희 @박진우
checkEmailInput()는 다음 버튼을 누르면 보여지는 인증 코드를 작성하는 부분입니다.
checkEmailInput()를 실행시 나타나는 시간은 src/components/Timer.jsx에서 반환 받습니다.
searchId()는 아이디 찾기의 이메일 입력 폼을 보여주는 부분입니다. 아이디 찾기와 비밀번호 찾기의 디자인이 같아
코드 인증과 아이디 찾기, 비밀번호 재설정은 외부 함수로 사용할 것입니다.
* */
function SearchIdPwScreen(props) {
  const [isSearchCheck, setIsSearchCheck] = useState(true)
  const [isNextBtn, setIsNextBtn] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [emailCode, setEmailCode] = useState('')

  const checkEmailInput = () => {
    return isNextBtn ? (
      <div></div>
    ) : (
      <div>
        <div>
          <p>*이메일로 전송된 코드를 입력해주세요.</p>
          <p>남은 시간</p>
          <Timer />
        </div>
        <input
          value={emailCode}
          onChange={(e) => setEmailCode(e.target.value)}
        />
      </div>
    )
  }
  const searchId = () => {
    return (
      <div>
        <div>
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
        </div>
        <p>*인증받은 이메일을 입력해주세요</p>
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        {checkEmailInput()}
        <button onClick={() => setIsNextBtn(!isNextBtn)}>다음</button>
      </div>
    )
  }
  return <div>{searchId()}</div>
}

export default SearchIdPwScreen
