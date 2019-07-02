import React from 'react';
import ReactDOM from 'react-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamSelected: "",
            roleSelected: ""
        };

        this.handleRole = this.handleRole.bind(this);
        this.handleTeam = this.handleTeam.bind(this);
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
        let teamSelect = e.currentTarget;
        this.setState({
            teamSelected: teamSelect
        });
    }

    render() {
        return (
            <div className="sidebar-div">
                <div className="side-select">
                    Select A Team
                </div>
                <div className="team-select">
                    <ul onClick={this.handleTeam}>
                        <li>Atlanta Reign</li>
                        <li>Boston Uprising</li>
                        <li>Chengdu Hunters</li>
                        <li>Dallas Fuel</li>
                        <li>Los Angeles Gladiators</li>
                        <li>San Francisco Shock</li>
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
