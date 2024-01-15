import React from "react";
import "./About.css";
import SkillItem from "../../components/SkillItem/SkillItem";
import { data } from "../../assets/jsons/SkillsData";
function About() {
  return (
    <div className="About">
      <h1 className="header">About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        delectus quasi sapiente quidem omnis minima repudiandae sequi
        accusantium ea unde dignissimos numquam fugit nisi iste, nobis vitae a
        aspernatur dolore? Eos necessitatibus distinctio fugit quod vel animi?
        Temporibus, quia nihil!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        delectus quasi sapiente quidem omnis minima repudiandae sequi
        accusantium ea unde dignissimos numquam fugit nisi iste, nobis vitae a
        aspernatur dolore? Eos necessitatibus distinctio fugit quod vel animi?
        Temporibus, quia nihil!
      </p>

      <h2 className="sub-header">Technical Skills</h2>
      <div className="skills-container">
        {data.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            name={skill.name}
            desc={skill.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
