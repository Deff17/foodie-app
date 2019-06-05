import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Autocomplete from '../autocomplete/Autocomplete'

const toolbar = (props) => {

    return (
        <div className={props.classes.ToolbarMain}>
            <div><a href='/'> FOODIE </a></div>
            <IconButton>
                <a><FavoriteBorder /></a>

            </IconButton>
            <Button variant="contained" ><a  href='/login'>Log In </a> </Button>
            <Button variant="contained" ><a  href='/register'>Register</a> </Button>
            <Autocomplete classes={props.classes} />
        </div>
    );


}

export default toolbar; 