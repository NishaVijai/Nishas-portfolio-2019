import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './assets/components/pages/Nav/Nav';
import Home from './assets/components/pages/Home';
import About from './assets/components/pages/About/About';
import Portfolio from './assets/components/pages/Portfolio/Portfolio';
import Resume from './assets/components/pages/Resume/Resume';
import Contact from './assets/components/pages/Contact/Contact';
import NotFoundPage from './assets/components/pages/PageNotFound/404';
import Footer from './assets/components/pages/Footer/Footer';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/components/pages/Theme';
import { GlobalStyles } from './assets/components/pages/Global';

import './App.css';
import './assets/components/pages/lightMode.css';
// class App extends React.Component {
// 	render() {
function App() {
	// const [ theme, setTheme ] = useState('light');

	// const toggleTheme = () => {
	// 	if (theme === 'light') {
	// 		setTheme('dark');
	// 	} else {
	// 		setTheme('light');
	// 	}
	// };
	const [ darkMode, setDarkMode ] = React.useState(getInitialMode());
	React.useEffect(
		() => {
			localStorage.setItem('dark', JSON.stringify(darkMode));
		},
		[ darkMode ]
	);

	function getInitialMode() {
		const isReturningUser = 'dark' in localStorage;
		const savedMode = JSON.parse(localStorage.getItem('dark'));
		const userPrefDarkScheme = getPrefColorScheme();

		if (isReturningUser) {
			//if mode was saved return dark / light
			return savedMode;
		} else if (userPrefDarkScheme) {
			//if preferred scheme is dark - return dark
			return true;
		} else {
			//otherwise - return light scheme
			return false;
		}
		// return savedMode || false;
	}

	function getPrefColorScheme() {
		if (!window.matchMedia) return;
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	return (
		<Router>
			{/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
			<div className="main-app-container">
				<div className={darkMode ? 'dark-mode' : 'light-mode'}>
					{/* <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1> */}
					{/* <> */}

					{/* </> */}
					{/* <GlobalStyles /> */}
					<Nav />
					<nav>
						{/* toggle goes here */}
						<div className="toggle-container">
							<button onClick={() => setDarkMode((prevMode) => !prevMode)}>toggle mode</button>
						</div>
					</nav>
					<h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
					{/* <button onClick={toggleTheme}>Toggle theme</button>
					<h1>It's a light theme!</h1> */}
					{/* <footer /> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/Home" component={Home} />
						<Route exact path="/About" component={About} />
						<Route exact path="/Portfolio" component={Portfolio} />
						<Route exact path="/Resume" component={Resume} />
						<Route exact path="/Contact" component={Contact} />
						<Route exact path="/404" component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>

					<Footer />
				</div>
			</div>
			{/* </ThemeProvider> */}
		</Router>
	);
}
// }
export default App;
