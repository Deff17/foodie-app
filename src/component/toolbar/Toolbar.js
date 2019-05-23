import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import classes from './Toolbar.css'

const toolbar = (props) => {

    return (
        <div className={classes.Toolbar}>
                <div>Foodie</div>
                <IconButton color="primary">
                    <FavoriteBorder/>
                </IconButton>
                <Button variant="contained" color="primary" > Log In </Button>
                <Button variant="contained" color="primary" > Register </Button>
                
                <div>Search</div>
            </div> 
    );


}

export default toolbar; 