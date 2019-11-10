import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import './App.css';
import Footer from './component/Footer';
import Cookie from './component/Cookie';
// import Subscription from './component/Subscription';

function App() {
  return (
    <div>
      <Header/>
      <Cookie/>
      <div className="bg-app">
        <Content/>
        <Footer/>
      </div>
      {/* <Subscription/> */}
    </div>
  );
}

export default App;
