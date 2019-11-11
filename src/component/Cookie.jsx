import React from 'react';
import CookieConsent from 'react-cookie-consent';
import './css/style.css';

const Cookie = () => (
    <div className="Cookies">
        <CookieConsent
            location="top"
            buttonText="Got it"
            style={{ 
                fontFamily: "Verdana, Tahoma, sans-serif",
                width: "100%",
                background: "#f5f5f5",
                color: "#000",
                fontSize: "14px"
            }}
            buttonStyle={{
                position: "relative",
                background: "#007bc1", 
                color: "#f5f5f5", 
                fontSize: "15px", 
                padding: "10px 10px", 
                margin: "auto",
                marginRight: "10px",
                borderRadius: "5px"
            }}
            expires={150}
        >
            By accessing and using this website, you acknowledge that you have read and understand our 
            <a href="#" style={{textDecoration: "none"}}> Cookie Policy</a>, 
            <a href="#" style={{textDecoration: "none"}}> Privacy,</a> 
            <a href="#" style={{textDecoration: "none"}}> Policy</a>, and our 
            <a href="#" style={{textDecoration: "none"}}> Terms of Service</a>.
        </CookieConsent>
    </div>
)
export default Cookie;