import React from 'react';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import RoomsList from './components/RoomList';

import './App.css';

const menu = [
    {
        link: '/home',
        label: 'Home'
    },    {
        link: '/about',
        label: 'About'
    },
    {
        link: '/rooms',
        label: 'Rooms'
    },
    {
        link: '/events',
        label: 'Events'
    },
    {
        link: '/contact',
        label: 'Contact'
    }
];

const rooms = [
    {
        "id": "r1",
        "image": "/images/img_1.jpg",
        "title": "Single Room",
        "price": "90$"
    },
    {
        "id": "r2",
        "title": "Family Room",
        "price": "120$"
    },
    {
        "id": "r3",
        "title": "Presidential Room",
        "price": "250$"
    }
];


function App () {

    return (
        <div className="App">
            <Header items={menu}/>
            <h1>App</h1>
            <HeroSection/>
            <WelcomeSection/>
            <RoomsList rooms={rooms} />
        </div>
    );
}

export default App;
