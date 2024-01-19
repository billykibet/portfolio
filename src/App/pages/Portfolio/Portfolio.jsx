import React from "react";
import "./Portfolio.css";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { data } from "../../assets/jsons/ProjectData";
function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <div className="custom-filter-holder">
        <button>All</button>
        <button>Frontend</button>
        <button>Backend</button>

        <button>FullStack</button>
        <button>Others</button>
      </div>
      <div className="projects-holder">
        {/* Temp Data */}

        {data.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
