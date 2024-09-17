import React from "react";

const Jobs = (props) => {
  return (
    <div className="flex gap-2 items-center mb-5">
      <img
        src={props.imageLink}
        alt="company logo"
        className="object-cover max-w-11 rounded-md"
      />
      <div className="w-full">
        <div class="workplace">
          <p className="dark:text-black">{props.jobTitle}</p>
          <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
            {props.jobDate}
          </p>
        </div>
        <p className="text-xs text-[#b4b4b4] dark:text-gray-600">
          {props.companyName}
        </p>
      </div>
    </div>
  );
};

export default Jobs;
