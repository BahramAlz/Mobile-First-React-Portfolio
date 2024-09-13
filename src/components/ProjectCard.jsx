import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-center md:flex-1 group">
      <div className="flex flex-col gap-2 md:max-w-xs opacity-100 group-hover:opacity-40 hover:!opacity-100 transition-opacity duration-300 ease-in-out">
        <img
          src={props.cardImage}
          alt={props.cardTitle}
          className="rounded-md aspect-[16/9] object-cover w-full"
        />
        <h3 className="text-white font-medium mt-3 dark:text-gray-800">
          {props.cardTitle}
        </h3>
        <p className="text-[#b4b4b4] dark:text-gray-600">
          {props.cardDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
