import React from "react";
import { BsMouse } from "react-icons/bs";
import { socials } from "../data/socials";
import { Tooltip } from "react-tooltip";

const Banner = () => {
  return (
    <div className="relative h-screen min-h-screen bg-black flex items-center justify-center bg-[url('../assets/images/background.jpeg')] bg-no-repeat bg-cover bg-bottom">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative text-white flex flex-col items-center gap-10">
        <div className="p-3 bg-white rounded-full bg-gradient-to-r from-primary">
          <img
            src="assets/images/avatar.jpeg"
            alt="avatar"
            className="w-[200px] rounded-full"
          />
        </div>
        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
          Hi, I'm Hieu
        </h1>
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
      <div className="absolute flex flex-col items-center justify-center bottom-10 animate-bounce cursor-pointer">
        <span className="block w-full text-center text-white tracking-widest text-sm mb-2">
          scroll
        </span>
        <BsMouse color="white" size={40} />
      </div>
    </div>
  );
};

export default Banner;
