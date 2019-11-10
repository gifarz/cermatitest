import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import './App.css';
import Footer from './component/Footer';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <div>
      <Header/>
      <CookieConsent/>
      <div className="bg-app">
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
