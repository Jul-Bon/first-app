import React from 'react';
import './RoomList.css';

function RoomList(props) {
    const rooms = props.rooms.map((room) =>
        <div key={room.id} className="room-item">
            <img className="room-img" src={room.image} alt="Room"/>
            <h3 className="room-title">{room.title}</h3>
            <p className="room-price"><span>{room.price}</span> / <span>per night</span></p>
        </div>
    );
    return (
            <div className="rooms-list">
                {rooms}
            </div>
    )
}

export default RoomList;