import React from "react";
import LPMOBILE from "../../../public/images/lpmobile.png";
import LANDING from "../../../public/images/landing.png";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ProjectDescCard from "../../components/ProjectDescCard";
import Tags from "../../components/Tags";

const ReLanding = () => {
  return (
    <div className="py-10 px-6 dark:bg-[#fff] flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <a
          href="http://rmc.remote.aero"
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

      <ProjectDescCard
        cardImage={LPMOBILE}
        cardAlt={"Mobile view"}
        cardDescription={
          "Mobile view of application, including information about Remote Aero, a contact us, and a login to the Mission Control."
        }
      />

      <ProjectDescCard
        cardImage={LANDING}
        cardAlt={"Desktop view"}
        cardDescription={
          "Desktop view of the landing page home page. The application is designed to be responsive to all platforms and devices."
        }
      />

      <Tags
        cardTitle={"Tags"}
        tagName={"ReactJS"}
        tagName2={"TypeScript"}
        tagName3={"CSS Modules"}
        tagName4={"Material UI"}
        tagName5={"Figma"}
      />

      <div className="flex items-center gap-1">
        <GoArrowLeft className=" dark:text-gray-800" size={20} />
        <Link
          to="/"
          className="font-medium underline decoration-white dark:text-gray-800 dark:decoration-gray-800"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ReLanding;
