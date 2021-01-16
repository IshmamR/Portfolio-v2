import React from 'react';
// import { Link } from 'react-router-dom';
import Resume from '../files/Resume.pdf';

const About = ({aboutData}) => {
	const links = aboutData["social-links"];

	const downloadResume = () => {
		const a = document.createElement('a');
		a.href = `${window.location.origin}${Resume}`;
		// console.log(a.href);
		a.download = "IshmamsResume.pdf";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	return (
		<div className="About text-center pt-2 pb-12" id="about">
			<h1 className="text-4xl mt-16 mb-8">About Me</h1>
			<div className="w-4/5 md:w-1/2 mx-auto bg-green-100 shadow-sm hover:shadow-inner p-4 mb-2">
				<h3 className="text-xl">
					{aboutData["top-text"]}
				</h3>
			</div>

			<div className="w-4/5 md:w-1/2 mx-auto bg-blue-50 shadow-sm hover:shadow-inner p-4 mb-2">
				<h3 className="text-xl flex items-center justify-center">
					<a href={links.github} target="_blank" rel="noreferrer">
						<img className="w-8 mx-4" src={'https://www.flaticon.com/svg/static/icons/svg/25/25231.svg'} alt="GitHub" /> 
					</a> |
					<a href={links.linkedin} target="_blank" rel="noreferrer">
						<img className="w-8 mx-4" src={'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png'} alt="Linkedin" /> 
					</a> |
					<a href={links.facebook} target="_blank" rel="noreferrer">
						<img className="w-8 mx-4" src={'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'} alt="facebook" />
					</a>
				</h3>
			</div>

			<div className="w-4/5 md:w-1/2 mx-auto bg-indigo-100 shadow-sm hover:shadow-inner p-4">
				<h3 className="text-xl">
					{aboutData["bottom-text"]}
				</h3>
			</div>

			<div className="flex justify-center">
					<button 
						onClick={downloadResume}
						className="bg-green-400 hover:bg-blue-500 hover:text-white hover:font-bold px-4 py-2 shadow-sm hover:shadow-inner mt-4 transform transition duration-200 ease-in"
					>
						Download My Resume
					</button>
			</div>
		</div>
	)
}

export default About;