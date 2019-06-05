import React, { Component } from 'react';
import Toolbar from '../../component/toolbar/Toolbar';
import Result from '../../component/result/Result';
import Route from 'react-router-dom';
import classes from './Results.css'


class Results extends Component {

    render() {
        return (
            <div >
                <Toolbar classes={classes}/>
                <Result key={1}/>
                <Result key={2}/>
                <Result key={3}/>
            </div>
        )
    }

}

export default Results;