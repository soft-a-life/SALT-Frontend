import './App.css';
import MainScreen from "./mainScreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostViewScreen from "./postViewScreen/PostViewScreen";
import NavigationBar from "./navigationBar/NavigationBar";
import LoginScreen from "./userManagament/loginScreen/LoginScreen";
import SignUpPage from "./userManagament/signupPage/SingUpPage"
import {useState} from "react";

/*
*  작성일 : 23.05.03
*  작성자 : 김영민
*  기능명세 : 모든 스크린과 경로, 사용자 데이터 관리
* */
function App() {
    const [userObject, setUserObject] = useState({userId:"", isLogin:false});


    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar userObjet={userObject}/>
                <Routes >
                    <Route path="/" exact element={<MainScreen />}></Route>
                    <Route path="/postViewPage/:user" element={<PostViewScreen/>}></Route>
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
