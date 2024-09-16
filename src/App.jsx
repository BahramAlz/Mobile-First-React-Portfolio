import myLogo from "../public/images/LOGO.svg";
import darkLogo from "../public/images/Dark.svg";
import Portrait from "../public/images/portrait.png";
import Landing from "../public/images/landing.png";

import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import NoPage from "./pages/NoPage.jsx";
import ReLanding from "./pages/projects/ReLanding.jsx";

import { useState } from "react";
import YungTitties from "./pages/projects/YungTitties.jsx";
import Crafts from "./pages/Crafts.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleDarkMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={lightMode ? "dark" : ""}>
      <div className="flex justify-center bg-[#111] dark:bg-white">
        <div className="max-w-2xl">
          <Router>
            <nav className="flex justify-between items-center px-6 py-10 dark:bg-[#fff]">
              <Link to="/">
                {lightMode ? (
                  <img src={darkLogo} className="" alt="My Logo" />
                ) : (
                  <img src={myLogo} className="" alt="My Logo" />
                )}
              </Link>
              <div className="flex gap-5 items-center dark:text-black text-[#b4b4b4]">
                <div className="hidden md:flex gap-10 mr-52">
                  <Link
                    to="/about"
                    className="text-[#b4b4b4 hover:text-white text-sm dark:hover:text-gray-800"
                  >
                    About
                  </Link>
                  <Link
                    to="/Crafts"
                    className="text-[#b4b4b4 hover:text-white text-sm dark:hover:text-gray-800"
                  >
                    Crafts
                  </Link>
                </div>
                <div onClick={toggleDarkMode} className=" cursor-pointer">
                  <FaMoon size={18} />
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                  {showMenu ? (
                    <IoClose size={24} />
                  ) : (
                    <AiOutlineMenu size={24} />
                  )}
                </div>
              </div>
            </nav>

            {showMenu && (
              <div className="md:hidden flex flex-col gap-4 bg-[#191919] max-w-28 rounded-l-3xl rounded-br-3xl absolute right-8 top-16 w-40 p-6 font-medium">
                <Link
                  to="/about"
                  className="text-white hover:text-gray-900"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/crafts"
                  className="text-white hover:text-gray-900"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </div>
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/crafts" element={<Crafts />} />
              <Route path="/projects/relanding" element={<ReLanding />} />
              <Route path="/projects/yungtitties" element={<YungTitties />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
