import React from 'react';
import menu from './menu.js';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import RoomSection from './components/RoomSection/RoomSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App () {
    return (
        <div className="App">
            <Header items={menu}/>
            <HeroSection/>
            <WelcomeSection/>
            <RoomSection/>
            <Footer/>
        </div>
    );
}

export default App;
