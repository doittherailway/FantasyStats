import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="nav-div">
                <div className="nav-box">
                    Stats
                </div>
                <div className="nav-box">
                    Welcome, Username
                </div>
            </div>
        )
    }
}

export default NavBar