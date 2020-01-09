import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
// import Portfolio from '../Portfolio/Portfolio';
// import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';

export default class MenuLinks extends React.Component {
	render() {
		return (
			<BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About}/>
                        {/* <Route path="/Portfolio" component={Portfolio}/>
                        <Route path="/Resume" component={Resume}/> */}
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </div> 
            </BrowserRouter>
		);
	}
}