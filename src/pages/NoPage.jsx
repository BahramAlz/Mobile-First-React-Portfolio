import React from "react";

const NoPage = () => {
  return (
    <div className="py-10 px-6 dark:bg-[#fff] flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-white font-bold dark:text-black">
            Error 404
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            This page doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
