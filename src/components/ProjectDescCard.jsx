import React from "react";

const ProjectDescCard = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={props.cardImage}
        alt={props.cardAlt}
        className="rounded-md aspect-[16/9] object-cover w-full"
      />
      <p className="text-[#b4b4b4] text-center px-2 dark:text-gray-700">
        {props.cardDescription}
      </p>
    </div>
  );
};

export default ProjectDescCard;
