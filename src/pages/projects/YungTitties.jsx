import React from "react";

const YungTitties = () => {
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
            Yung Titties
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            Specifically designed and developed to advertise the all female
            hip-hop trio’s new song!
          </p>
        </div>
      </div>
    </div>
  );
};

export default YungTitties;
