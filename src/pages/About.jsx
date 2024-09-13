import React from "react";
import About1 from "../../public/images/about1.jpg";
import About2 from "../../public/images/about2.jpg";
import RemoteAero from "../../public/images/remoteaero.png";
import ScaniaIT from "../../public/images/scaniait.png";

import { MdOutlineMail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div className="py-16 px-6 dark:bg-[#fff] flex flex-col gap-10">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-3xl text-white font-bold dark:text-black">
            About
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            Just a quick glimpse
          </p>
        </div>
        <div className="max-w-48 relative left-4 mb-16">
          <img src={About2} alt="portrait" className="rounded-md -rotate-6" />
          <img
            src={About1}
            alt="portrait"
            className="rounded-md absolute top-14 left-32 rotate-6"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-10 md:flex-row md:gap-20">
        <h3 className="text-[#b4b4b4] dark:text-black dark:font-medium">
          About
        </h3>
        <div className="flex flex-col gap-5 dark:text-black">
          <p>
            I have a passion for design and always looking for way to
            incorporate it into my engineering work.
          </p>
          <p>
            I chose coding because I've always been a logical problem solver,
            and my lifelong love for gaming sparked my curiosity about the
            boundless potential of the internet. This drove me to dive into the
            development scene and leave my mark.
          </p>
          <p>
            When I'm not at my desk I am probably lifting weights, reading
            books, or at a coffee shop :)
          </p>
        </div>
      </div>

      <div className="flex flex-col md:gap-20">
        <h3 className="text-[#b4b4b4] dark:text-black dark:font-medium">
          Connect
        </h3>
        <div className="flex gap-5 flex-wrap">
          <div className="flex items-center gap-10 px-5 py-3 bg-[#191919] rounded-md">
            <div className="flex gap-3 items-center">
              <MdOutlineMail size={20} />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </div>
            <GoArrowUpRight size={20} />
          </div>
          <div className="flex items-center gap-10 px-5 py-3 bg-[#191919] rounded-md">
            <div className="flex gap-3 items-center">
              <MdOutlineMail size={20} />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
            <GoArrowUpRight size={20} />
          </div>
          <div className="flex items-center gap-10 px-5 py-3 bg-[#191919] rounded-md">
            <div className="flex gap-3 items-center">
              <MdOutlineMail size={20} />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <GoArrowUpRight size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 mt-20 md:flex-row md:gap-20">
          <h3 className="text-[#b4b4b4] dark:text-black dark:font-medium">
            Work
          </h3>
          <div className="flex flex-col gap-5 dark:text-black">
            <p>
              I specialize in Python, data analytics, React, web development,
              UI/UX, and product design. But I am always learning new things.
              Here are some of the places I have worked.
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center mt-4">
            <img src={RemoteAero} alt="" />
            <div>
              <div className="flex items-center space-x-20">
                <p className="dark:text-black">Frontend Developer</p>
                <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
                  2023-2024
                </p>
              </div>
              <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
                Remote Aero
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4">
          <img src={ScaniaIT} alt="" />
          <div>
            <div className="flex items-center space-x-40">
              <p className="dark:text-black">CS Agent</p>
              <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
                2018-2020
              </p>
            </div>
            <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
              Scania IT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
