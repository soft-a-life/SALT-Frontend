import logo from './logo.svg';
import './App.css';
import MainScreen from "./mainScreen/MainScreen";
import LoginPage from "./mainScreen/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes >
               <Route path="/" element={<MainScreen />}></Route>
               <Route path="/postViewPage/:user"></Route>
               <Route path="/login" element={<LoginPage />}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
