import React, { Suspense, lazy } from 'react';
import content from '../data/content';
import Hero from '../components/Hero';

const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
	return (
		<div className="Home">
			<Hero heroData={content.hero} />
			<Suspense fallback={<div></div>}>
				<Projects projData={content.projects} />
			</Suspense>
			<Suspense fallback={<div></div>}>
				<Skills skillData={content.skills} />
			</Suspense>
			<Suspense fallback={<div></div>}>
				<About aboutData={content.about} />
			</Suspense>
			<Suspense fallback={<div></div>}>
				<Contact contactData={content.contact} />
			</Suspense>
		</div>
	)
}

export default Home;