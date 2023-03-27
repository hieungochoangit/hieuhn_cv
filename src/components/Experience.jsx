import React from "react";
import Wrap from "./Wrap";
import { exps } from "../data/experience";

const Experience = () => {
  return (
    <Wrap subtitle="experience" title="my experience">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {exps &&
          exps.map((exp, index) => (
            <li className="mb-10 ml-4" key={index}>
              <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 -left-2 border border-white"></div>
              <time className="mb-1 text-sm italic font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.time}
              </time>
              <h3 className="text-lg font-semibold uppercase">
                {exp.company}
              </h3>
              <p className="mb-4 text-base font-normal">
                {exp.content}
              </p>
            </li>
          ))}
      </ol>
    </Wrap>
  );
};

export default Experience;
