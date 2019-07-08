import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    const handleClick = () => {
        return(
            <div>
                <p>{props.playerName} Expanded Stats go here</p>
                <p>Damage: 4000</p>
                <p>Healing: 1243</p>
                <p>Elims: 7</p>
                <p>Deaths: 2</p>
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