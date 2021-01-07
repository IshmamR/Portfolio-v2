import React from 'react';

const SkillSet = ({name, skillSetData}) => {
	return (
		<div className="SkillSet w-full md:w-1/2 lg:w-1/4 bg-white shadow-sm p-4">
			<h2 className="text-2xl border-b px-1">{name}:</h2>
			<ul className="px-0">
				{skillSetData.map((skill, index) => (
					<li 
						className="border list-none rounded-sm px-3 py-3 border-t-0" 
						key={index}
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SkillSet;