import React from "react";
import "./ProjectItem.css";
import temp from "../../assets/images/pexels-mikhail-nilov-8107900.jpg";

function ProjectItem() {
  return (
    <div className="ProjectItem">
      <div className="image-holder">
        <img src={temp} alt="" />
      </div>
      <h4 className="title">Authentication App</h4>
      <p className="langs">React, CSS, Spring Boot</p>
    </div>
  );
}

export default ProjectItem;
