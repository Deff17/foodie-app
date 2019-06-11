import React, { Component } from 'react';
import Toolbar from '../../component/toolbar/Toolbar';
import classes from './MainPage.css'
import Route from 'react-router-dom';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Toolbar isMainPage={true} />
            </div>
        )
    }

}

export default MainPage;