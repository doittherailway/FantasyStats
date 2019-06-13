import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    const handleClick = () => {
        return(
            <div>
                {props.playerName} Stats go here
            </div>
        )
    };

    return(
        <li>
            <div>{props.playerName}</div>
            <div>Player Image</div>
            <p onClick={handleClick}>Expand</p>
        </li>
    )
}

export default Card;