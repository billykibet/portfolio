import React from "react";
import "./ProjectItem.css";
import temp from "../../assets/images/pexels-mikhail-nilov-8107900.jpg";

function ProjectItem({ project }) {
  return (
    <div className="ProjectItem">
      <div className="image-holder">
        <img src={project.image} alt="" />
      </div>
      <h4 className="title">{project.title}</h4>
      <p className="langs">{project.langs}</p>
    </div>
  );
}

export default ProjectItem;
