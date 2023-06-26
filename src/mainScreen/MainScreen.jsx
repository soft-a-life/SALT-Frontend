import React, {useState} from 'react';
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import BodyLeftComponents from "./components-left/BodyLeftComponents";
import BodyRightComponents from "./components-right/BodyRightComponents";
import Footer from "./Footer";
import "./MainScreen.css"


function MainScreen(props) {

    const [category, setCategory] = useState('');

    return (
        <div className={"mainScreen"}>
            <NavigationBar />
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