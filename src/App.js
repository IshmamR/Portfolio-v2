import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import content from './data/content';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const ScrollUp = lazy(() => import('./components/ScrollUp'));

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar navData={content.navbar} />
				<Hero heroData={content.hero} />
				
				<Switch>
					<Route path="/">
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
						<Suspense fallback={<div></div>}>
							<ScrollUp />
						</Suspense>
					</Route>
				</Switch>
				
			</BrowserRouter>
		</div>
	)
}

export default App;