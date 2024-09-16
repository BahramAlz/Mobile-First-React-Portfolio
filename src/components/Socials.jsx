import { GoArrowUpRight } from "react-icons/go";

const Socials = (props) => {
  return (
    <div className="flex flex-wrap gap-2 mt-8 md:gap-5">
      <a
        href={props.link1}
        target="_blank"
        rel="email link"
        className="bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium md:hover:bg-zinc-800"
      >
        {props.social}{" "}
        <GoArrowUpRight className="text-white dark:text-gray-300" />
      </a>
      <a
        href={props.link2}
        target="_blank"
        rel="github link"
        className="bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium md:hover:bg-zinc-800"
      >
        {props.social2}{" "}
        <GoArrowUpRight className="text-white dark:text-gray-300" />
      </a>
      <a
        href={props.link3}
        target="_blank"
        rel="linkedin link"
        className="bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium md:hover:bg-zinc-800"
      >
        {props.social3}{" "}
        <GoArrowUpRight className="text-white dark:text-gray-300" />
      </a>
    </div>
  );
};

export default Socials;
