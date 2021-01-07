import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LOGO from '../images/electrode-min.png';

const NavBar = ({navData}) => {
	const [transparent, handleTransparent] = useState('start');
	useEffect(() => {
		var scroller = () => {
			if(window.scrollY > '100' && window.scrollY <= window.innerHeight-100) {
				handleTransparent('mid')
			} else if(window.scrollY > window.innerHeight-100) {
				handleTransparent('end')
			} else { handleTransparent('start') }
		}
		window.addEventListener('scroll', scroller, false);
		return () => {
			window.removeEventListener("scroll", scroller, false);
		}
	}, [])

	return (
		<div 
			className={`NavBar bg-white 
				${transparent==='start' && 'bg-opacity-0 text-white shadow-none '}
				${transparent==='mid' && 'bg-opacity-25 text-white shadow-md '}
				${transparent==='end' && 'bg-opacity-100 text-gray-900 shadow-lg '}
				w-full py-3 fixed z-50 transition-all duration-500 ease-in`
			}
		>
			<div className="flex justify-between items-center w-10/12 mx-auto">
				<HashLink to="/#hero" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
					<img className="w-10" src={LOGO} alt="IR" />
				</HashLink>

				<div className="flex items-center">
					{navData.links.map((link, index) => (
							<HashLink to={link.to} className="text-xl ml-2" key={index} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
								<span className="px-3 py-2 hover:shadow-inner">
									{link.name}
								</span>
							</HashLink>
						)
					)}
				</div>
			</div>
		</div>
	)
}

export default NavBar;