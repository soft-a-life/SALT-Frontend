import React from 'react';
import "./Footer.css"

/*
footer-text 2개 추가
*/

function Footer(props) {


    return (
        <div className={"footer"}>  
                <div className="footer-text">SALT 게시판</div>
                <div className="divider">|</div>
                <a className="footer-link"
                    href="https://www.salt.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    https://www.salt.com
                </a>
                <div className="footer-text">Tel : 051-320-1111</div>
                <div className="footer-text">Email : dongseo@dongseo</div>
        </div>
    );
}

export default Footer;