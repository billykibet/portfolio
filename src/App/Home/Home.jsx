import React from "react";
import "./Home.css";
// Images
import avator from "../assets/images/Edgerunner David, LEGION.jpeg";
import telegramIc from "../assets/icons/telegram.svg";
function Home() {
  return (
    <div className="Home">
      <div className="nav-bar">
        <h1 className="logo">BILLY K.</h1>

        <div className="nav-links">
          <button>Home</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="main-body">
        <div className="avator-holder">
          <img src={avator} alt="" />
        </div>
        <div className="routes-holder">Test</div>
      </div>
      <div className="footer">
        <p>&copy; Copyright</p>
        <div className="social-icons">
          <img src={telegramIc} alt="" />
          <img src={telegramIc} alt="" />
          <img src={telegramIc} alt="" />
          <img src={telegramIc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
