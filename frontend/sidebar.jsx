import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-div">
                <div className="side-select">
                    Select A Team
                </div>
                <div className="team-select">
                    <ul>
                        <li>Atlanta Reign</li>
                        <li>Boston Uprising</li>
                        <li>Chengdu Hunters</li>
                        <li>Dallas Fuel</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;
