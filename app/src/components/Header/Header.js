import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {isOpen: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        const isOpen = this.state.isOpen;
        let classList = 'header-menu';
        if (isOpen) {
            classList += ' open';
        }

        return (
            <header className="header">
                <div className="header-inner container">
                    <a href="#" className="logo">Sogo Hotel</a>
                    <div className="menu-button" onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={classList}>
                    <ul className="main-menu">
                        {this.props.items.map((item, index) =>
                            <li className="menu-item" key={index}>
                                <a href={item.link} className="menu-link">{item.label}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;