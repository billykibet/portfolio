import React from "react";
import "./Portfolio.css";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
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
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Portfolio;
