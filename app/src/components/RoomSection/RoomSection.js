import React from 'react';
import './RoomSection.css';
import RoomList from '../RoomList/RoomList';
import rooms from '../../rooms';

function RoomSection() {
    return (
        <section className="room-section container">
            <div className="room-section-headline">
                <h2 className="room-section-title section-title">Rooms & Suites</h2>
                <p className="room-section-description">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>
            </div>

            <RoomList rooms={rooms}/>
        </section>
    )
}

export default RoomSection;