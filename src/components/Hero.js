import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Typical from 'react-typical';
import ELECTRODE from '../images/electrode-min.png';

const Hero = ({heroData}) => {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);

	return (
		<div className="Hero w-full flex flex-wrap items-center justify-center bg-gradient-to-r from-green-500 to-blue-700" id="hero">
			<div className="w-10/12 mx-auto flex md:flex-row-reverse flex-wrap items-center justify-between mt-10 md:mt-20">
				<div className="hero-image w-full lg:w-2/5 flex items-center justify-center">
					<img src={ELECTRODE} className="animate-pulse" alt="electrode" />
				</div>

				<div className="text-center lg:text-left text-white mx-auto lg:mx-0">
					<h2 className={
							`${animate? '':'translate-y-10 opacity-0'
						} transform transition duration-1000 ease-in-out text-2xl md:text-3xl md:text-5xl font-bold`}
					>
						{heroData.headings[0]} 
						<br /> 
						{heroData.headings[1]}
					</h2>
					<h1 className="text-xl md:text-2xl mb-0 md:mt-2">
						<Typical
							steps={heroData.typical}
							loop={Infinity}
						/>
					</h1>
					<HashLink to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
						<button className="bg-blue-400 md:bg-indigo-500 px-6 md:px-10 py-2 md:py-3 mt-2 md:mt-10 rounded-md shadow-md hover:shadow-inner">
							{heroData.button}
						</button>
					</HashLink>
				</div>
			</div>

			<div className="scroll-down w-full mx-auto flex items-center justify-center">
				<HashLink to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
					<button className="font-mono border-white border-2 rounded-xl px-2 py-3 text-white animate-bounce">
						V
					</button>
				</HashLink>
			</div>
		</div>
	)
}

export default Hero;
