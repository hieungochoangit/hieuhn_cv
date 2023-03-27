import React from "react";
import Wrap from "./Wrap";
import { skills } from "../data/skill";

const Skill = () => {
  return (
    <Wrap subtitle="skill" title="skill">
      <div class="grid grid-cols-6 gap-10 bg-white py-4 rounded-md">
        {skills &&
          skills.map((skill, index) => (
            <div class="skill" key={index}>
              <img
                src={skill.src}
                alt={skill.alt}
                class="max-h-full"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </Wrap>
  );
};

export default Skill;
