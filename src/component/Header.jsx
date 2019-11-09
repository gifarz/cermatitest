import React from 'react';
import Logo from './img/logo.png';
import './css/style.css';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Hello! I'm Gifar Zaini</h1>
                <h2>Consult, Design, and Develop Websites</h2>
                <div className="header-p">
                    <p className="p1">Have something great in mind? Feel free to contact me.</p>
                    <p className="p2">I'll help you to make it happen</p>
                </div>
                <div className="header-logo">
                    <img src={Logo} alt="Logo" className="logo"/>
                </div>
                
                <div className="header-btn">
                    <button className="btn" onClick="/"><strong>LET'S MAKE CONTACT</strong></button>
                </div>
            </div>
        )
    }
}

export default Header;