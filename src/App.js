import './App.css';
import MainScreen from "./mainScreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostViewScreen from "./postViewScreen/PostViewScreen";
import NavigationBar from "./components/NavigationBar";
import LoginScreen from "./userManagament/loginScreen/LoginScreen";
import SignUpPage from "./userManagament/signupPage/SignupPage"
import {useState} from "react";
import PostWriteScreen from "./PostWriteScreen/PostWriteScreen";

/*
*  작성일 : 23.05.03
*  변경일 : 23.07.03
*  작성자 : 김영민
*  변경자 : 김영민
*  기능명세 : 모든 스크린과 경로, 사용자 데이터 관리
*  변경사항 : 로그아웃 함수 추가
* */
function App() {
    const [userObject, setUserObject] = useState({userId:"", isLogin:false});


    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar userObject={userObject}
                                logOut={(init) => setUserObject(init)}/>
                <Routes >
                    <Route path="/" exact element={<MainScreen />}></Route>
                    <Route path="/postViewPage/:user" element={<PostViewScreen/>}></Route>
                    <Route path="/postWritePage"
                           element={<PostWriteScreen userObject={userObject}/>}>
                    </Route>
                    <Route path="/loginPage"
                           exact
                           element={<LoginScreen
                               loginBtn={(id) => {setUserObject({userId:id, isLogin: true})}}
                           />}>
                    </Route>
                    <Route path="/loginPage/signUpPage" element={<SignUpPage />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;