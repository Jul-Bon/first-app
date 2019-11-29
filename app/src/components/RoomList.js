import React from 'react';

function RoomsList(props) {
    const rooms = props.rooms.map((room) =>
        <div key={room.id}>
            <h3>{room.title}</h3>
            <p>{room.price}</p>
        </div>
    );
    return (
        <div>
            {rooms}
        </div>
    );
}

export default RoomsList;