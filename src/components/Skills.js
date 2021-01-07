import React from 'react';

const Skills = ({skillData}) => {
	// const skillImgURL = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics";
	return (
		<div className="Skills w-full bg-gray-100 py-10" id="skills">
			<h3 className="text-4xl text-center mb-6">Technologies I Use</h3>
			<div className="w-10/12 mx-auto flex flex-wrap items-center justify-around">
				{skillData.map((skill, index) => (
					<div key={index} className="bg-white w-20 h-20 rounded-full shadow-xl hover:shadow-inner p-4 my-3 md:mx-4 lg:mx-1">
						<img 
							className="w-16 object-contain" 
							src={`${process.env.PUBLIC_URL}/assets/techs${skill.img}`} 
							alt={skill.name} 
							title={skill.name} 
						/>
					</div>
				))}
				
			</div>
		</div>
	)
}

export default Skills;