import './App.css'
import React from 'react'
import MainScreen from './mainScreen/MainScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PostViewScreen from './postViewScreen/PostViewScreen'
import NavigationBar from './components/NavigationBar'
import LoginScreen from './userManagament/loginScreen/LoginScreen'
import SignUpScreen from './userManagament/signupScreen/SignUpScreen'
import PostWriteScreen from './postWriteScreen/PostWriteScreen'
import SearchIdScreen from './userManagament/searchIdPwScreen/SearchIdScreen'

function App() {
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
          <Route path="/postWritePage" element={<PostWriteScreen />}></Route>
          <Route path="/loginScreen" element={<LoginScreen />}></Route>
          <Route path="/signUpScreen" element={<SignUpScreen />}></Route>
          <Route path="/searchIdScreen" element={<SearchIdScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
