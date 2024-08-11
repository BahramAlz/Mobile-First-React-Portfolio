import myLogo from './assets/LOGO.svg'
import darkLogo from './assets/Dark.svg'
import Portrait from "./assets/portrait.png"
import Landing from "./assets/landing.png"
import Mission from "./assets/mission.png"

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
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage.jsx'

import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  const toggleDarkMode = () => {
    setLightMode(!lightMode)
  }

  return (
    <div className={lightMode ? "dark" : ""}>
      <Router>
        <nav className='flex justify-between items-center px-5 py-10 dark:bg-[#fff]'>
            <Link to="/">
              {lightMode ? <img src={darkLogo} className='' alt="My Logo" /> : <img src={myLogo} className='' alt="My Logo" />}
            </Link>
            <div className='flex gap-5 items-center dark:text-black'>
              <div className='hidden md:flex gap-5'>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
                <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
              </div>
              <div onClick={toggleDarkMode}>
                <FaMoon size={18} />
              </div>
              <div className='md:hidden' onClick={toggleMenu}>
                {showMenu ? <IoClose size={24} /> : <AiOutlineMenu size={24} />}
              </div>
            </div>
          </nav>
          
          {showMenu && (
            <div className='md:hidden flex flex-col gap-4 bg-[#191919] max-w-28 rounded-l-3xl rounded-br-3xl absolute right-8 top-16 w-40 p-6 font-medium'>
              <Link to="/about" className="text-white hover:text-gray-900" onClick={closeMenu}>About</Link>
              <Link to="/projects" className="text-white hover:text-gray-900" onClick={closeMenu}>Projects</Link>
            </div>
          )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

    </Router>
  </div>
  )
}

export default App