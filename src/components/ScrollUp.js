import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import UpArrow from '../images/up-arrow.svg';

const ScrollUp = () => {
	const [showScroll, setShowScroll] = useState(false);
	useEffect(() => {
		var scrollerUp = () => {
			if(window.scrollY > window.innerHeight-200) {
				setShowScroll(true)
			} else { setShowScroll(false) }
		}
		window.addEventListener('scroll', scrollerUp, false);
		return () => {
			window.removeEventListener("scroll", scrollerUp, false);
		}
	}, [])
	return (
		<div className={`${!showScroll && 'hidden'} fixed bottom-0 right-0 z-50`}>
			<HashLink 
				className="text-xl text-black"
				to="/#hero" 
				scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
			>
				<button className="p-2 focus:outline-none">
					<img className="w-10 md:w-12 transform hover:-translate-y-2 transition duration-200 ease-in-out" src={UpArrow} alt="Up" />
				</button>
			</HashLink>
		</div>
	)
}

export default ScrollUp;