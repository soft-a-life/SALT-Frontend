import './App.css'
import React from 'react'
import MainScreen from './mainScreen/MainScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostViewScreen from './postViewScreen/PostViewScreen'
import NavigationBar from './components/NavigationBar'
import LoginScreen from './userManagament/loginScreen/LoginScreen'
import SignUpScreen from './userManagament/signupScreen/SignUpScreen'
import PostWriteScreen from './PostWriteScreen/PostWriteScreen'
import { useCookies } from 'react-cookie'
import SearchIdPwScreen from './userManagament/searchIdPwScreen/SearchIdPwScreen'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['userDate'])

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<MainScreen />}></Route>
          <Route
            path="/postViewPage/:user"
            element={<PostViewScreen />}
          ></Route>
          <Route
            path="/postWritePage"
            element={<PostWriteScreen userObject={cookies} />}
          ></Route>
          <Route path="/loginScreen" exact element={<LoginScreen />}></Route>
          <Route path="/signUpScreen" element={<SignUpScreen />}></Route>
          <Route
            path="/searchIdPwScreen"
            element={<SearchIdPwScreen />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
