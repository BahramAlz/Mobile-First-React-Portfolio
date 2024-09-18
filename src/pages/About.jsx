import React from "react";
import About1 from "../../public/images/about1.jpg";
import About2 from "../../public/images/about2.jpg";
import RemoteAero from "../../public/images/remoteaero.png";
import Scania from "../../public/images/scania.svg";
import Socials from "../components/Socials";
import Jobs from "../components/Jobs";

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

      <div className="flex flex-col gap-2 mt-10 md:flex-row md:items-center md:gap-14">
        <h3 className="text-[#b4b4b4] dark:text-black dark:font-medium">
          Connect
        </h3>

        <Socials
          link1={"google.se"}
          social={"Email"}
          link2={"https://github.com/BahramAlz"}
          social2={"Github"}
          link3={"http://www.linkedin.com/in/bahram-al-zuhairi-4b6001173"}
          social3={"LinkedIn"}
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2 mt-10 md:flex-row md:gap-20">
          <h3 className="text-[#b4b4b4] dark:text-black dark:font-medium">
            Work
          </h3>
          <div className="flex flex-col gap-5 dark:text-black">
            <p>
              I specialize in JavaScript, React, Web Development, UI/UX, and
              Product Design. But I am always learning new things. Here are some
              of the places I have worked.
            </p>

            <div className="mt-4">
              <Jobs
                imageLink={RemoteAero}
                jobTitle={"Frontend Developer"}
                jobDate={"2023-2024"}
                companyName={"Remote Aero"}
              />

              <Jobs
                imageLink={Scania}
                jobTitle={"Frontend Developer"}
                jobDate={"2019-2020"}
                companyName={"Remote Aero"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
