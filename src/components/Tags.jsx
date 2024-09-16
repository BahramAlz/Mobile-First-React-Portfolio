import React from "react";

const Tags = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[#b4b4b4] font-medium dark:text-gray-700">
        {props.cardTitle}
      </h3>
      <div className="flex flex-wrap gap-3">
        <p className="bg-[#191919] px-5 py-1 rounded-md">{props.tagName}</p>
        <p className="bg-[#191919] px-5 py-1 rounded-md">{props.tagName2}</p>
        <p className="bg-[#191919] px-5 py-1 rounded-md">{props.tagName3}</p>
        <p className="bg-[#191919] px-5 py-1 rounded-md">{props.tagName4}</p>
        <p className="bg-[#191919] px-5 py-1 rounded-md">{props.tagName5}</p>
      </div>
    </div>
  );
};

export default Tags;
