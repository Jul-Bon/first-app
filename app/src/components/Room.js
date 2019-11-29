import React from 'react';

function Room(props) {
    return (
        <div className="room-card">
            <h3 className="room-title">{props.title}</h3>
            <h4 className="room-price"><span>{props.price}</span> <span>per night</span></h4>
        </div>
    )
}

export default Room;