import React from "react";
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";
import { SiLeetcode } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/Sanyam-Jain16",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },
  {
    title: "leetcode",
    link: "https://leetcode.com/u/sanyam-16/",
    icon: <SiLeetcode />,
    delay: 0.9,
  },
  {
    title: "X",
    link: "https://x.com/sanyamsjain",
    icon: <SlSocialTwitter />,
    delay: 1,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/sanyam.jain.334839?rdid=uP0OpaEFmRB23lZX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AHaWpg7bt%2F#",
    icon: <SlSocialFacebook />,
    delay: 1.1,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/the.sanyam_jain?igsh=MW50NnRuMHNxdGFoNQ==",
    icon: <SlSocialInstagram />,
    delay: 1.2,
  },
];

const SocialLInks = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-teal-300">
        <div className="flex lg:flex-col md:flex-col flex-row lg:gap-y-5 md:gap-y-5 gap-x-8 py-6 lg:py-0 md:py-0">
          {socialAccounts?.map((item, index) => (
            <a key={index} href={item?.link} target="_blank">
              <span className="w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-teal-300 hover:border-teal-300 text-lightText hover:text-teal-300 duration-200 hover:bg-black">
                {item?.icon}
              </span>
            </a>
          ))}
        </div>
        <div className="w-[1px] h-48 bg-teal-300 hidden lg:block md:block"></div>
      </div>
    </>
  );
};

export default SocialLInks;
