import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

class CardIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: ['BabyBay', 'DogMan', 'AimGod', 'Ameng', 'Yveltal', 'Note', 'OGE']
        }
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.players.map (player => {
                        return(<Card playerName={player} />)
                    })}
                </ul>
            </div>
        )
    }
}

export default CardIndex;