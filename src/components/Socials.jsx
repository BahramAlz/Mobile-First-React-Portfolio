import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";

const Socials = (props) => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return (
      <a
        href={`mailto:${email}${params}`}
        className="bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium md:hover:bg-zinc-800"
      >
        {children}
      </a>
    );
  };
  return (
    <div className="flex flex-wrap gap-2 md:gap-5">
      <Mailto
        email="bahram.alzu@gmail.com"
        subject="Hello & Welcome"
        body="Hello world!"
      >
        {props.extraIcon}
        {props.social}{" "}
        <GoArrowUpRight className="text-white dark:text-gray-300" />
      </Mailto>
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
