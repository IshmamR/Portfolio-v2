import React from 'react';
import SkillSet from './SkillSet';

const Skills = ({skillData}) => {
	return (
		<div className="Skills w-full bg-gray-100 py-14" id="skills">
			<h3 className="text-4xl text-center mb-6">Skillset</h3>
			<div className="w-10/12 mx-auto flex flex-wrap items-center justify-around">
				{skillData.icons.map((skill, index) => (
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

			<div className="w-10/12 mx-auto flex flex-wrap">
				<SkillSet name={"Frontend"} skillSetData={skillData.frontend} />
				<SkillSet name={"Frameworks"} skillSetData={skillData.frameworks} />
				<SkillSet name={"Backend"} skillSetData={skillData.backend} />
				<SkillSet name={"Other Techs"} skillSetData={skillData.other} />
			</div>

		</div>
	)
}

export default Skills;