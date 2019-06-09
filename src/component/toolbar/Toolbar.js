import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/Favorite';
import image from './logo.png'
//import {ReactAutosuggestExample} from './examples/react-autosuggest.js'
import Autocomplete from '../autocomplete/Autocomplete';
import { withStyles } from '@material-ui/styles';

const toolbar = (props) => {
    console.log(props)
    return (
        <div className={props.classes.root}>
            <a href='/'><img className={props.classes.logo} alt='icon' src={image} /> </a>
            <div className={props.classes.buttons}><a href='/'>
                <Button className={props.classes.login} ><a href='/login'>Log In </a> </Button>
                <Button className={props.classes.register} ><a href='/register'>Register</a> </Button>
                <IconButton className={props.classes.favoriteBorder}>
                    <a><FavoriteBorder /></a>
                </IconButton>
            </a>
            </div>

            <Autocomplete />
        </div>
    );
}

const stylesToolbar = {
    root: {
        textAlign: 'center'
    },
    textFiledRoot: {
        backgroundColor: 'FFFFFF'
    },
    chipAdd: {
        backgroundColor: '#DCEDC1'
    },
    chipRemove: {
        backgroundColor: '#FFAAA5'
    },
    logo: {
        // left: '40% !important',
        // right: '40% !important',
        marginLeft: 'auto',
        marginRight: 'auto',            
    },
    buttons: {
        float: 'right'
    },
    login: {
        background: 'white !important',
        borderRadius: '25px !important',
        border: 0,
        color: 'black !important',
        height: 48,
        width: 90,
        padding: '0 30px',
        margin: '2px !important'
    },
    register: {
        background: 'white !important',
        borderRadius: '25px !important',
        border: 0,
        color: 'black !important',
        height: 48,
        width: 90,
        padding: '0 30px',
        margin: '2px !important'
    },
    favoriteBorder: {
        color: 'white !important',
        fontSize: '25px',
        marginRight: '50px !important',
    }
}


export default withStyles(stylesToolbar)(toolbar); 