import React from 'react';
import CookieConsent from 'react-cookie-consent';

function Cookie() {

    <CookieConsent
    location="bottom"
    buttonText="Got it"
    cookieName="myAwesomeCookieName2"
    style={{ background: "white" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}>
    By accessing and using this website, you acknowledge that you have read and
    understand our Cookie Policy, Privacy Policy, and our Terms of Service.{" "}
    </CookieConsent>

}
export default Cookie;