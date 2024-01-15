import React from "react";

function SkillItem({ icon, name, desc }) {
  return (
    <div className="SkillItem">
      <img src={icon} alt="" />
      <div className="skill-text">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SkillItem;
