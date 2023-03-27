import React from "react";
import Wrap from "./Wrap";

const AboutMe = () => {
  return (
    <Wrap subtitle="information" title="about me">
      <p>
        Hi, I'm{" "}
        <span className="textPrimary">Hieu Hoang Ngoc</span>
        ,
      </p>
      <p>
        Currently, I am living and working in Hanoi. A{" "}
        <span className="textPrimary">
          Frontend Developer
        </span>{" "}
        with{" "}
        <span className="textPrimary">
          3 years of experience in Javascript technologies
          and 1 year of experience in Laravel, NodeJs
        </span>
        , with good knowledge of{" "}
        <span className="textPrimary">UI/UX, OOP.</span>
      </p>
    </Wrap>
  );
};

export default AboutMe;
