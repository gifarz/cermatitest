import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => (
    <div className="Cookies">
        <CookieConsent
            className="cookie-consent"
            location="top"
            buttonText="Got it"
            style={{ 
                display: "grid",
                gridTemplateRows: "auto 1fr auto",
                gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                maxWidth: "100%",
                gridGap: "10px",
                background: "#f5f5f5",
                color: "#000",
                JustifyContent: "center"
            }}
            buttonStyle={{
                gridColumn: "auto",
                float: "right",
                position: "relative",
                background: "#007bc1", 
                color: "#f5f5f5", 
                fontSize: "15px", 
                padding: "10px 10px", 
                margin: "auto",
                marginRight: "25px",
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