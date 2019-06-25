import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamSelected: "",
            roleSelected: ""
        };
    }

    handleRole(e) {
        e.preventDefault();
        let roleSelect = e.currentTarget;
        this.setState({
            roleSelected: roleSelect
        });
    }

    handleTeam(e) {
        e.preventDefault();
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
                <div>
                    <ul onClick={this.handleRole}>
                        <li>DPS</li>
                        <li>Support</li>
                        <li>Tank</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBar;
