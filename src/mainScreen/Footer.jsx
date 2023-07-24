import React from 'react';
import "./Footer.css"

function Footer(props) {


    return (
        <div className={"footer"}>
             <div className="footer-text">salt 게시판</div>
             <div className="divider">|</div>
             <a className="footer-link"
                href="https://www.salt.com"
                target="_blank"
                rel="noopener noreferrer">
                https://www.salt.com
             </a>
        </div>
    );
}

export default Footer;