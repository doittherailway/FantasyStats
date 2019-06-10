import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import SideBar from './sidebar';
import CardIndex from './cardindex';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <NavBar />
                <SideBar />
                <CardIndex />
            </>
        );
    }
}

export default Root;