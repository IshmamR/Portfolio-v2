import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({projData}) => {
	return (
		<div className="Projects bg-white" id="projects">
			<div className="bg-gradient-to-bl from-transparent to-white py-5">
			
			<h1 className="text-5xl text-center my-16">Recent Projects...</h1>
			{projData.map((proj, index) => {
				return index < 5 ? (
					<div 
						className={`${index%2===0? 'flex-row': 'flex-row-reverse'} Project w-10/12 lg:w-2/3 mx-auto mb-10 flex flex-wrap items-center justify-between`}
					 	key={index}
					 >
						<div className="projImg w-full md:w-4/12">
							<img 
								className="w-11/12 md:w-full md:h-40 lg:h-52 md:w-auto mx-auto rounded-lg md:shadow-md" 
								src={`${process.env.PUBLIC_URL}/projects/${proj.img}`} 
								alt="" 
							/>
						</div>

						<div className="projDesc w-full md:w-3/5 shadow-md md:shadow-2xl rounded-lg p-3 md:p-6 text-center md:text-left">
							<h1 className="text-4xl mb-2">{proj.name}</h1>
							<p className="text-lg mb-3">
								{proj.description}
							</p>
							<a href={proj.github} 
								className="bg-blue-700 hover:bg-green-400 px-5 py-2 mr-4 text-white rounded-3xl"
								target="_blank" rel="noreferrer"
							>
								Github
							</a>
							<a href={proj.demo} 
								className="bg-green-500 hover:bg-blue-500 px-5 py-2 text-white rounded-3xl"
								target="_blank" rel="noreferrer"
							>
								Live
							</a>
						</div>
					</div>
				) : ''
			})}

			<div className="w-10/12 mx-auto text-center my-12">
				<Link to="/projects">
					<button className="bg-indigo-700 hover:bg-indigo-500 py-2 px-3 rounded-full text-white text-lg">
						Show All Projects
					</button>
				</Link>
			</div>

			</div>
		</div>
	)
}

export default Projects;