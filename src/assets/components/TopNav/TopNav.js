import React, { Component } from 'react';
import Logo from '../TopNav/Logo';
import MenuCss from '../MenuCSS/MenuCss';

export default class TopNav extends Component {
    render() {
        return (
            <div>
                <div>
                    <Logo />
                    <MenuCss />
                </div>
            </div>
        )
    }
}
