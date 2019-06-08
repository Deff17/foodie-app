import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import image from './logo.png'
import {ReactAutosuggestExample} from './examples/react-autosuggest.js'

const toolbar = (props) => {
    return (
        <div className={props.classes.ToolbarMain}>
            <div><a href='/'>
                <Button variant="contained"><a href='/login'>Log In </a> </Button>
                <Button variant="contained"><a href='/register'>Register</a> </Button>
                <IconButton>
                    <a><FavoriteBorder/></a>

                </IconButton>

                <img className='profile-image' alt='icon' src={image} width="150"/> </a>
            </div>


                <ReactAutosuggestExample
                    label='Food search'
                    placeholder='Select ingredients'
                />
        </div>
    );


}


export default toolbar; 