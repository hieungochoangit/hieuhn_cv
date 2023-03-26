import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { socials } from "../data/socials";
import { Tooltip } from "react-tooltip";

const Banner = () => {
  return (
    <div className="relative h-screen min-h-screen bg-black flex items-center justify-center bg-[url('images/background.jpeg')] bg-no-repeat bg-cover bg-bottom">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative text-white flex flex-col items-center gap-10">
        <img
          src="images/avatar.jpeg"
          alt="avatar"
          className="w-[250px] rounded-full"
        />
        <h1 className="text-5xl">Hi, I'm Hieu</h1>
        <div className="flex gap-4">
          {socials &&
            socials.map((item) => (
              <>
                <a
                  target="_blank"
                  href={item.link}
                  key={item.id}
                  className="inline-block bg-white p-2 rounded-full hover:rotate-[360deg] hover:scale-110 transition-all"
                  id={item.name}
                >
                  {item.component}
                </a>
                <Tooltip
                  anchorSelect={`#${item.name}`}
                  clickable
                  place="top"
                >
                  <span className="uppercase">
                    {item.name}
                  </span>
                </Tooltip>
              </>
            ))}
        </div>
      </div>
      <SlArrowDown
        color="white"
        size={50}
        className="absolute bottom-10 animate-bounce"
      />
    </div>
  );
};

export default Banner;
