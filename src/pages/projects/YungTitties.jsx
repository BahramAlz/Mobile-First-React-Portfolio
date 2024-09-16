import React from "react";
import LPMOBILE from "../../../public/images/lpmobile.png";
import LANDING from "../../../public/images/landing.png";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import ProjectDescCard from "../../components/ProjectDescCard";
import Tags from "../../components/Tags";
import Yung from "../../../public/images/yungtitties.png";
import yungGame from "../../../public/images/yunggame.png";

const YungTitties = () => {
  return (
    <div className="py-10 px-6 dark:bg-[#fff] flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <a
          href="https://titty-landing.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline decoration-white font-medium dark:text-gray-900 dark:decoration-black"
        >
          Visit Project
        </a>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-white font-bold dark:text-black">
            Yung Titties
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            Specifically designed and developed to advertise the all female
            hip-hop trio’s new song!
          </p>
        </div>
      </div>

      <ProjectDescCard
        cardImage={Yung}
        cardAlt={"Mobile view"}
        cardDescription={
          "Desktop landing page for marketing the new song & giving background for the client and the game."
        }
      />

      <ProjectDescCard
        cardImage={yungGame}
        cardAlt={"Desktop view"}
        cardDescription={
          "Desktop game where you can experience the song while playing a guitar-hero like game!"
        }
      />

      <Tags
        cardTitle={"Tags"}
        tagName={"NextJS"}
        tagName2={"Gsap"}
        tagName3={"Threejs"}
        tagName4={"CSS Modules"}
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

export default YungTitties;
