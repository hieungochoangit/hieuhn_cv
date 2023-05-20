import React from "react";
import Wrap from "./Wrap";
import { AiOutlineDownload } from "react-icons/ai";

const AboutMe = () => {
  return (
    <Wrap subtitle="information" title="about me">
      <p>
        Hi, I'm{" "}
        <span className="textPrimary">Ngoc Hieu Hoang</span>
        ,
      </p>
      <p className="mb-4">
        Currently, I am living and working in Hanoi. A{" "}
        <span className="textPrimary">
          Frontend Developer
        </span>{" "}
        with{" "}
        <span className="textPrimary">
          3 years of experience in Javascript technologies (ReactJS, VueJs)
          and 1 year of experience in Laravel, NodeJs
        </span>
        , with good knowledge of{" "}
        <span className="textPrimary">UI/UX, OOP.</span>
      </p>

      <a
        href="assets/files/Ngoc-Hieu-Hoang-CV.pdf"
        download
        className="inline-flex px-4 py-2 items-center gap-4 rounded-md bg-primary text-white hover:opacity-90"
      >
        <span>Download CV</span>{" "}
        <AiOutlineDownload size={20} />
      </a>
    </Wrap>
  );
};

export default AboutMe;
