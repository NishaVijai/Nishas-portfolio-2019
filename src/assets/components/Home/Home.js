import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <TopNav />
                    <Header />
                    <Footer />
                </div>  
            </div>
        )
    }
}
