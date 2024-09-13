import React from "react";
import { Link } from "react-router-dom";

import Landing from "../../public/images/landing.png";
import Yung from "../../public/images/yungtitties.png";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <div className="py-16 px-6 dark:bg-[#fff]">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-white font-bold dark:text-black">
          Projects
        </h2>
        <p className="text-[#b4b4b4] dark:text-gray-700">
          Here are some of the projects I’ve worked on.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <Link to="relanding">
            <img
              src={Landing}
              alt="Remote Aero Landing Page"
              className="rounded-md"
            />
            <h3 className="text-white font-medium mt-3 dark:text-gray-800">
              Remote Aero - Landing Page
            </h3>
            <p className="text-[#b4b4b4] dark:text-gray-600">
              A landing page to introduces remote.aero and their purpose to
              users and also provide a login for the operators to access the
              Mission Control
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <img src={Yung} alt="Remote Aero Mission Control" />
            <h3 className="text-white font-medium mt-3 dark:text-gray-800">
              Remote Aero - Mission Control
            </h3>
          </div>
          <p className="text-[#b4b4b4] dark:text-gray-600">
            The Mission Control, where Drone Operators can control the drone and
            assist SRSS in their rescue mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
