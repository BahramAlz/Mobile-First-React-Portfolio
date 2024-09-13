import React from "react";

const Crafts = () => {
  return (
    <div className="py-10 px-6 dark:bg-[#fff] flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div className="text-sm underline decoration-white font-medium dark:text-gray-900 dark:decoration-black">
          Coming soon
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl text-white font-bold dark:text-black">
            Crafts
          </h2>
          <p className="text-[#b4b4b4] dark:text-gray-700">
            This is where I experiment with UI and interaction design. I use
            this space to explore new ideas or recreate cool things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crafts;
