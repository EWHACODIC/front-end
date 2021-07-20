import './style/App.css';
import React from "react";
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>메인화면</p>
        <Mypage></Mypage>
      </header>
    </div>
  );
}

export default App;
