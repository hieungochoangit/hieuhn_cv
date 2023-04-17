import React from "react";
import Wrap from "./Wrap";
import { skills } from "../data/skill";

const Skill = () => {
  return (
    <Wrap subtitle="skill" title="skill">
      <div className="grid grid-cols-6 gap-10 bg-white py-4 rounded-md">
        {skills &&
          skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img
                src={skill.src}
                alt={skill.alt}
                className="max-h-full"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </Wrap>
  );
};

export default Skill;
