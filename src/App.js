import './App.css';
import MainScreen from "./mainScreen/MainScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostViewScreen from "./postViewScreen/PostViewScreen";
import NavigationBar from "./components/NavigationBar";
import LoginScreen from "./userManagament/loginScreen/LoginScreen";
import SignUpScreen from "./userManagament/signupPage/SignUpScreen"
import {useState} from "react";
import PostWriteScreen from "./PostWriteScreen/PostWriteScreen";

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
                    <Route path="/loginScreen"
                           exact
                           element={<LoginScreen
                               loginBtn={(id) => {setUserObject({userId:id, isLogin: true})}}
                           />}>
                    </Route>
                    <Route path="/loginScreen/signUpScreen" element={<SignUpScreen />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;