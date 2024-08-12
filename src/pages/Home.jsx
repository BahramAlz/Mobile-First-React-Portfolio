import {
  Link,
} from 'react-router-dom';

import Landing from "../assets/landing.png"
import Mission from "../assets/mission.png"
import { GoArrowUpRight } from "react-icons/go";

function Home() {
  return (
      <div className='pb-10 px-5 dark:bg-[#fff]'>
        <div className='pt-16'>
          <div className='flex flex-col'>
            <h1 className='text-3xl text-white font-bold dark:text-black'>Bahram Al-Zuhairi</h1>
            <h2 className='text-xl text-[#b4b4b4] dark:text-gray-900'>React Developer</h2>
            <p className='text-[#b4b4b4] mt-5 dark:text-gray-800'>Good evening, I’m a programmer who loves building new things. In addition to coding, I also make sure to stay updated with the newest tech news!</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-5'>
            <a href="http://" target="_blank" rel="email link" className='bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium'>Email <GoArrowUpRight className='text-gray-600 dark:text-gray-300' />
            </a>
            <a href="http://" target="_blank" rel="github link" className='bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium'>Github <GoArrowUpRight className='text-gray-600 dark:text-gray-300'/>
            </a>
            <a href="http://" target="_blank" rel="linkedin link" className='bg-[#191919] px-5 py-1 rounded-full flex items-center gap-1 font-medium'>LinkedIn <GoArrowUpRight className='text-gray-600 dark:text-gray-300'/>
            </a>
          </div>
        </div>

        <section>
          <div className='mt-20'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-1'>
                <h2 className='text-white font-bold text-xl dark:text-gray-800'>Pinned Projects</h2>
              </div>
              <p className='text-[#b4b4b4] dark:text-gray-700'>Here are some of the projects I've worked on</p>
            </div>

            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-2'>
                <div className='mt-10'>
                  <img src={Landing} alt="Remote Aero Landing Page" className='rounded-md'/>
                    <h3 className='text-white font-medium mt-3 dark:text-gray-800'>Remote Aero - Landing Page</h3>
                </div>
                <p className='text-[#b4b4b4] dark:text-gray-600'>A landing page to introduces remote.aero and their purpose to users and also provide a login for the operators to access the Mission Control</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className=''>
                  <img src={Mission} alt="Remote Aero Mission Control"/>
                  <h3 className='text-white font-medium mt-3 dark:text-gray-800'>Remote Aero - Mission Control</h3>
                </div>
                <p className='text-[#b4b4b4] dark:text-gray-600'>The Mission Control, where Drone Operators can control the drone and assist SRSS in their rescue mission.</p>
              </div>

              <div className='flex items-center gap-1'>
                <Link to="/projects" className='font-medium underline decoration-white dark:text-gray-800 dark:decoration-gray-800'>All Projects</Link>
                <GoArrowUpRight className='text-gray-600 dark:text-gray-800' size={20}/>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home
