import { Link } from "react-router-dom";

import Landing from "../../public/images/landing.png";
import Yung from "../../public/images/yungtitties.png";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCard from "../components/ProjectCard";
import Socials from "../components/Socials";

function Home() {
  return (
    <div className="pb-10 px-5 dark:bg-[#fff] flex flex-col gap-20">
      <div className="pt-16">
        <div className="flex flex-col">
          <h1 className="text-3xl text-white font-bold dark:text-black">
            Bahram Al-Zuhairi
          </h1>
          <h2 className="text-xl text-[#b4b4b4] dark:text-gray-900">
            React Developer
          </h2>
          <p className="text-[#b4b4b4] mt-5 dark:text-gray-800 md:max-w-lg">
            Good evening, I’m a programmer who loves building new things. In
            addition to coding, I also make sure to stay updated with the newest
            tech news!
          </p>
        </div>
        <Socials
          link1={"google.se"}
          social={"Email"}
          link2={"https://github.com/BahramAlz"}
          social2={"Github"}
          link3={"http://www.linkedin.com/in/bahram-al-zuhairi-4b6001173"}
          social3={"LinkedIn"}
        />
      </div>

      <section>
        <div className="mt-20">
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-lg dark:text-gray-800">
              Pinned Projects
            </h2>
            <p className="text-[#b4b4b4] dark:text-gray-700">
              Here are some of the projects I've worked on
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-10 md:flex-row md:gap-5 group">
            <Link to="/projects/relanding">
              <ProjectCard
                cardImage={Landing}
                cardTitle={"Remote Aero - Landing page"}
                cardDescription={
                  "A landing page to introduces remote.aero and their purpose to users and also provide a login for the operators to access the Mission Control"
                }
              />
            </Link>
            <Link to="/projects/yungtitties">
              <ProjectCard
                cardImage={Yung}
                cardTitle={"Yung Titties - Landing & Game website"}
                cardDescription={
                  "Specifically designed and developed to advertise the all female hip-hop trio’s new song!"
                }
              />
            </Link>
          </div>

          <div className="flex items-center gap-1 mt-20">
            <Link
              to="/crafts"
              className="font-medium underline decoration-white dark:text-gray-800 dark:decoration-gray-800"
            >
              Crafts
            </Link>
            <GoArrowUpRight
              className="text-white dark:text-gray-800"
              size={20}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
