import React from "react";
import "./Contact.css";
import map from "../../assets/images/Edgerunner David, LEGION.jpeg";
function Contact() {
  return (
    <div className="Contact">
      <h1>Get in touch</h1>
      <div className="map">
        <img src={map} alt="" />
      </div>

      <form>
        <div className="top">
          <div className="input-holder">
            <h5>Full Name</h5>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-holder">
            <h5>Email Address</h5>

            <input type="text" placeholder="Email Adress" />
          </div>
        </div>
        <div className="massage-holder">
          <h5>Massege</h5>

          <textarea type="text" placeholder="Email Adress" />
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
