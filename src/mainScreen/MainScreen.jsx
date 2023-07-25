import React from 'react';
import Header from "./Header";
import BodyLeftComponents from "./components-left/BodyLeftComponents";
import BodyRightComponents from "./components-right/BodyRightComponents";
import Footer from "./Footer";
import "./MainScreen.css"

/*
return문 안에
mainPhoto 객체 추가
Header를 mainScreen > mainPhoto로 위치 변경
*/

function MainScreen(props) {


    return (
        <div className={"mainPhoto"}>
            <Header />
        <div className={"mainScreen"}>
            
            <div className={"body"}>
                <BodyLeftComponents />
                <BodyRightComponents />
            </div>
            <Footer />
        </div>
        </div>
    );
}

export default MainScreen;