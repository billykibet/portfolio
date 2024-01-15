import React from "react";
import "./Home.css";

// Images
import avator from "../assets/images/pexels-emmy-e-2381069.jpg";
import telegramIc from "../assets/icons/telegram.svg";
import Homepage from "../pages/Homepage/Homepage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
function Home() {
  return (
    <div className="Home">
      <div className="nav-bar">
        <h1 className="logo">BILLY K.</h1>

        <div className="nav-links">
          <button className="cyber-button">Home</button>
          <button>About</button>
          <button>Portfolio</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="main-body">
        <div className="avator-holder">
          <img src={avator} alt="" />
          <div className="avator-overlay">
            <div className="nottifications">nottification</div>
          </div>
        </div>
        <div className="routes-holder">
          {/* <Homepage /> */}
          <About />
          {/* <Contact /> */}
        </div>
      </div>
      <div className="footer">
        <p>&copy; Copyright </p>
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
