# SALT/react-frontend Project

해당 프로젝트는 리액트를 기반으로 제작되었습니다.

## 개요 

블로그, 커뮤니티 기능을 제공하는 웹. 

## 프로젝트 구조

<img width="1405" alt="스크린샷 2023-07-27 오전 10 49 14" src="https://github.com/soft-a-life/SALT-Frontend/assets/38457985/b5bfacc0-0228-4b85-a1b3-b1c57e268354">

## npm

npm install react-cookie `웹 쿠키에 저장할 수 있음`

npm i prosemirror `에디터`

npm install react-router-dom `페이지 이동에 사용하는 라우터`

npm install eslint --save-dev `lint`


## 설치 및 실행

다음은 프로젝트를 설치하고 실행하는 단계입니다:

1. Git 저장소에서 프로젝트를 클론합니다: `git clone https://github.com/soft-a-life/SALT-Frontend.git`
2. 프로젝트 디렉토리로 이동합니다: `cd 해당 프로젝트 위치`
3. npm을 이용하여 프로잭트 실행: `npm start`
4. 웹 브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션을 확인합니다.

## CommitMesseageRoule
``` form
<type>(<scope>) : <subject>          -- 헤더
<BLANK LINE>
<body>                              -- 본문
<BLANK LINE>
<footer>                            -- 바닥글
```
## type

```bash
feat : 새로운 기능에 대한 커밋
fix : 버그 수정에 대한 커밋
build : 빌드 관련 파일 수정에 대한 커밋
chore : 그 외 자잘한 수정에 대한 커밋
ci : CI관련 설정 수정에 대한 커밋
docs : 문서 수정에 대한 커밋
style : 코드 스타일 혹은 포맷 등에 관한 커밋
refactor :  코드 리팩토링에 대한 커밋
test : 테스트 코드 수정에 대한 커밋