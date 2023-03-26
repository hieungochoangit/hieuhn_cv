import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";

export const socials = [
  {
    id: 1,
    name: "github",
    link: "https://github.com/hieungochoangit",
    component: (
      <AiFillGithub
        size={40}
        className="cursor-pointer text-black"
      />
    ),
  },
  {
    id: 2,
    name: "facebook",
    link: "https://www.facebook.com/hoangngochieu97",
    component: (
      <AiFillFacebook
        size={40}
        className="cursor-pointer text-[#1778F2]"
      />
    ),
  },
  {
    id: 3,
    name: "linkedin",
    link: "https://www.linkedin.com/in/hieungochoang/",
    component: (
      <AiFillLinkedin
        size={40}
        className="cursor-pointer text-[#0077b5]"
      />
    ),
  },
  {
    id: 4,
    name: "zalo",
    link: "https://zalo.me/0347470396",
    component: (
      <SiZalo
        size={40}
        className="cursor-pointer text-[#0068FF]"
      />
    ),
  },
];
