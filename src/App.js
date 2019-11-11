import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import './App.css';
import Footer from './component/Footer';
import Cookie from './component/Cookie';


function App() {
  return (
    <div>
      <Header/>
      <Cookie/>
      <div className="bg-app">
        <Content/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
