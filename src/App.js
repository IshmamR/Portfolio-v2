import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import content from './data/content.json';
import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const AllProjects = lazy(() => import('./pages/AllProjects'));

const ScrollUp = lazy(() => import('./components/ScrollUp'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					
					<Route exact path="/">
						<NavBar navData={content.navbar} />
						<Suspense fallback={<div></div>}>
							<Home />
						</Suspense>
						<Suspense fallback={<div></div>}>
							<ScrollUp />
						</Suspense>
					</Route>

					<Route exact path="/projects">
						<NavBar navData={content.navbar} />
						<Suspense fallback={<div></div>}>
							<AllProjects projData={content.projects} />
						</Suspense>
					</Route>

				</Switch>
				
				<Suspense fallback={<div></div>}>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</div>
	)
}

export default App;