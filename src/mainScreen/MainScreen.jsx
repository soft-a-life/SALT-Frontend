import React from 'react';
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import BodyLeftComponents from "./components-left/BodyLeftComponents";
import BodyRightComponents from "./components-right/BodyRightComponents";
import Footer from "./Footer";


function MainScreen(props) {

    return (
        <div>
            <NavigationBar />
            <Header />
            <div >
                <BodyLeftComponents />
                <BodyRightComponents />
            </div>
            <Footer />
        </div>
    );
}

export default MainScreen;