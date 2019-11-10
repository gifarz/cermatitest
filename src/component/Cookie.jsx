import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => (
    <div className="Cookies">
        <CookieConsent
            className="cookie-consent"
            location="top"
            buttonText="Got it"
            cookieName="myAwesomeCookieName2"
            style={{ 
                // display: "inline",
                background: "#f5f5f5",
                color: "#000",
                width: "100%",
                textAlign: "start"
            }}
            buttonStyle={{
                position: "relative",
                // justifyContent: "space-between",
                background: "#007bc1", 
                color: "#f5f5f5", 
                fontSize: "15px", 
                padding: "10px 10px", 
                margin: "auto",
                marginRight: "20px",
                borderRadius: "5px"
            }}
            expires={150}
        >
            By accessing and using this website, you acknowledge that you have read and
            understand our <span style={{color: "#007bc1"}}> Cookie Policy, Privacy Policy,</span> and our <span style={{color: "#007bc1"}}> Terms of Service. </span>
        </CookieConsent>
    </div>
)
export default Cookie;