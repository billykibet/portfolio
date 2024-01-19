import React from "react";
import "./ProjectView.css";

import tempImg from "../../assets/images/pexels-emmy-e-2381069.jpg";

function ProjectView() {
  return (
    <div className="ProjectView">
      <h1>Project View</h1>
      <div className="p-image-holder">
        <img src={tempImg} alt="" />
        <div className="p-art-holder">
          <button>View Code</button>
          <button>Share Link</button>
        </div>
      </div>

      <h2 className="title">Authentication App</h2>
      {/*  */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quaerat architecto dolorum, delectus ex esse nisi, molestias eveniet,
        laborum temporibus obcaecati enim officiis sapiente! Aspernatur laborum
        deleniti ab nihil quibusdam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae,
        iure aliquid illum quaerat error delectus voluptate iusto sequi ducimus
        repellat. Eaque officia beatae tenetur illum aperiam eligendi nisi sit.
      </p>
      {/*  */}

      <p className="p-langs">React, Javascript, Spring</p>

      <div className="p-navigation">
        <button>Previous Project</button>
        <button>All Projects</button>
        <button>Next Project</button>
      </div>
    </div>
  );
}

export default ProjectView;
