import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col gap-2 md:max-w-xs mt-10 opacity-100 group-hover:opacity-40 hover:!opacity-100 transition-opacity duration-300 ease-in-out">
      <img src={props.cardImage} alt="Project Image" className="rounded-md" />
      <h3 className="text-white font-medium mt-2 dark:text-gray-800">
        {props.cardTitle}
      </h3>
      <p className="text-[#b4b4b4] dark:text-gray-600">
        {props.cardDescription}
      </p>
    </div>
  );
};

export default ProjectCard;
