import React from 'react';

const Projects = ({projData}) => {
	return (
		<div className="Projects py-5" id="projects">
			<h1 className="text-5xl text-center my-16">Recent Projects...</h1>
			{projData.map((proj, index) => {
				return (
					<div 
						className={`${index%2===0? 'flex-row': 'flex-row-reverse'} Project w-10/12 lg:w-2/3 mx-auto mb-10 flex flex-wrap items-center justify-between`}
					 	key={index}
					 >
						<div className="projImg">
							<img 
								className="w-11/12 md:h-40 lg:h-52 md:w-auto mx-auto rounded-lg md:shadow-md" 
								src={`${process.env.PUBLIC_URL}/projects/${proj.img}`} 
								alt="" 
							/>
						</div>

						<div className="projDesc w-full md:w-3/5 shadow-md md:shadow-2xl rounded-lg p-3 md:p-6 text-center md:text-left">
							<h1 className="text-4xl mb-2">{proj.name}</h1>
							<p className="text-lg mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Repellendus ipsum accusantium alias minima nostrum libero impedit eveniet itaque nisi minus totam veritatis, eum saepe provident facilis, tempore eius culpa nihil.</p>
							<a href={proj.github} 
								className="bg-blue-700 px-4 py-2 mr-4 text-white rounded-3xl"
								target="_blank" rel="noreferrer"
							>
								Github
							</a>
							<a href={proj.demo} 
								className="bg-green-500 px-4 py-2 text-white rounded-3xl"
								target="_blank" rel="noreferrer"
							>
								Live
							</a>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Projects;