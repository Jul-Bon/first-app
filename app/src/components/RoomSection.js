import React from 'react';
import RoomsList from './components/RoomList';

function RoomSection() {
    return (
        <section className="room-section">
            <div className="room-section-headline">
                <h2 className="room-section-title">Rooms & Suites</h2>
                <p className="room-section-description">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>
            </div>
            <RoomsList rooms={rooms} />
        </section>
    )
}

export default RoomSection;