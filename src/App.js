import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './assets/components/pages/Nav/Nav';
import Home from './assets/components/pages/Home';
import About from './assets/components/pages/About/About';
import Portfolio from './assets/components/pages/Portfolio/Portfolio';
import Resume from './assets/components/pages/Resume/Resume';
import Contact from './assets/components/pages/Contact/Contact';
import NotFoundPage from './assets/components/pages/PageNotFound/404';
import Footer from './assets/components/pages/Footer/Footer';

import './app.css';
class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="main-app-container">
					<Nav />
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
			</Router>
		);
	}
}
export default App;
