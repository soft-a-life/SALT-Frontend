import React from 'react';
import Header from "./Header";
import BodyLeftComponents from "./components-left/BodyLeftComponents";
import BodyRightComponents from "./components-right/BodyRightComponents";
import Footer from "./Footer";
import "./MainScreen.css"


function MainScreen(props) {

    return (
        <div className={"mainScreen"}>
            <Header />
            <div className={"body"}>
                <BodyLeftComponents />
                <BodyRightComponents />
            </div>
            <Footer />
        </div>
    );
}

export default MainScreen;