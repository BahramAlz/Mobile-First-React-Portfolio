import React from 'react'
import About1 from '../assets/about1.jpg'
import About2 from '../assets/about2.jpg'
import RemoteAero from '../assets/remoteaero.png'
import ScaniaIT from '../assets/scaniait.png'

const About = () => {
	return (
		<div className='py-10 px-5 dark:bg-[#fff]'>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-3xl text-white font-bold dark:text-black'>About</h2>
					<p className='text-[#b4b4b4]'>Just a quick glimpse</p>
				</div>
				<div className='max-w-48 relative left-4 mb-16'>
					<img src={About2} alt="portrait" className='rounded-md -rotate-6'/>
					<img src={About1} alt="portrait" className='rounded-md absolute top-20 left-32 rotate-6'/>
				</div>
			</div>

			<div className='flex flex-col gap-2 mt-10'>
				<h3 className='text-[#b4b4b4]'>About</h3>
				<div className='flex flex-col gap-5'>
					<p>
						I have a passion for design and always looking for way to incorporate it into my engineering work.
					</p>
					<p>
						I chose coding because I've always been a logical problem solver, and my lifelong love for gaming sparked my curiosity about the boundless potential of the internet. This drove me to dive into the development scene and leave my mark.
					</p>
					<p>
						When I'm not at my desk I am probably lifting weights, reading books, or at a coffee shop :)
					</p>
				</div>
			</div>

			<div className='flex flex-col gap-2 mt-20'>
				<h3 className='text-[#b4b4b4]'>Work</h3>
				<div className='flex flex-col gap-5'>
					<p>
						1 year of professional developement experience.
					</p>
					<p>
						I started my career at Hyper Island, where I got to develop and learn more about the coding world through real-world client projects. At the end of my school year, I did my internship at remote.aero where I got the chance to refine my UI/UX and coding skills that now show in my work.
					</p>
				</div>
				<div className='flex gap-2 items-center mt-4'>
					<img src={RemoteAero} alt="" />
					<div>
						<div className='flex items-center space-x-20'>
							<p>Front-end Developer</p>
							<p className='text-xs text-[#b4b4b4]'>2023-2024</p>
						</div>
						<p className='text-xs text-[#b4b4b4]'>Remote Aero</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col gap-2 mt-20'>
				<div className='flex flex-col gap-5'>
					<p>
						1+ years of professional experience as a CS Agent.
					</p>
					<p>
						My first job straight out of highschool was as a CS Agent at Scania IT. I was very thrilled to be able to enter the tech industry so quickly and to learn from many people. My time at Scania IT is what shaped me.
					</p>
				</div>
				<div className='flex gap-2 items-center mt-4'>
					<img src={ScaniaIT} alt="" />
					<div>
						<div className='flex items-center space-x-40'>
							<p>CS Agent</p>
							<p className='text-xs text-[#b4b4b4]'>2018-2020</p>
						</div>
						<p className='text-xs text-[#b4b4b4]'>Scania IT</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About