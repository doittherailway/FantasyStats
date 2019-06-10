import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    return(
        <li>
            <div>{props.playerName}</div>
            <div>Player Image</div>
        </li>
    )
}

export default Card;