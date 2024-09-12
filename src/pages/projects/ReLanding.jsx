import React from "react";
import LPMOBILE from "../../assets/lpmobile.png";
import LANDING from "../../assets/landing.png";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const ReLanding = () => {
  return (
    <div className="py-10 px-6 dark:bg-[#fff] flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <a
          href="http://remote.aero"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline decoration-white font-medium dark:text-gray-900 dark:decoration-black"
        >
          Visit Project
        </a>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-white font-bold dark:text-black">
            Remote Aero Landing Page
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            A landing page to introduces Remote Aero and their purpose to users
            and also provide a login for the operators to access the Mission
            Control
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <img src={LPMOBILE} alt="mobile first display" />
        <p className="text-[#b4b4b4] text-center px-2 dark:text-gray-700">
          Mobile view of application, including information about Remote Aero, a
          contact us, and a login to the Mission Control.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <img
          src={LANDING}
          alt="laptop display of landing page"
          className="rounded-lg"
        />
        <p className="text-[#b4b4b4] text-center px-2 dark:text-gray-700">
          Desktop view of the landing page home page. The application is
          designed to be responsive to all platforms and devices.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-[#b4b4b4] font-medium dark:text-gray-700">Tags</h3>
        <div className="flex flex-wrap gap-3">
          <p className="bg-[#191919] px-5 py-1 rounded-md">ReactJS</p>
          <p className="bg-[#191919] px-5 py-1 rounded-md">CSS Modules</p>
          <p className="bg-[#191919] px-5 py-1 rounded-md">Material UI</p>
          <p className="bg-[#191919] px-5 py-1 rounded-md">TypeScript</p>
          <p className="bg-[#191919] px-5 py-1 rounded-md">Figma</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <GoArrowLeft className=" dark:text-gray-800" size={20} />
        <Link
          to="/projects"
          className="font-medium underline decoration-white dark:text-gray-800 dark:decoration-gray-800"
        >
          All Projects
        </Link>
      </div>
    </div>
  );
};

export default ReLanding;
