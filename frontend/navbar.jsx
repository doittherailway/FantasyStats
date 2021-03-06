import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    // make logout a dropdown
    render() {
        return(
            <div className="nav-div">
                <div className="nav-box">
                    Stats
                </div>
                <div className="nav-roster">
                    Saved Rosters
                </div>
                <div className="nav-box">
                    Welcome, Username
                    <div>Log out</div> 
                </div>
            </div>
        )
    }
}

export default NavBar