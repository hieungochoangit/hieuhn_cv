import React from "react";
import Wrap from "./Wrap";

const AboutMe = () => {
  return (
    <Wrap subtitle="information" title="about me">
      <p>
        Xin chào, mình là{" "}
        <span className="textPrimary">Hoàng Ngọc Hiếu</span>
        ,
      </p>
      <p>
        Hiện tại mình đang sinh sống và làm việc tại thủ đô
        Hà Nội. Mình hiện tại là một{" "}
        <span className="textPrimary">
          Frontend Developer.
        </span>
      </p>
    </Wrap>
  );
};

export default AboutMe;
