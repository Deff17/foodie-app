import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/Favorite';
import image from './logo.png'
//import {ReactAutosuggestExample} from './examples/react-autosuggest.js'
import Autocomplete from '../autocomplete/Autocomplete';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const toolbar = (props) => {
    
    const type = props.isMainPage ? '' : 'Results';

    return (
        <div className={props.classes['root' + type]}>
            <a href='/'><img className={props.classes['logo' + type]} alt='icon' src={image} /> </a>
            <div className={props.classes['buttons' + type]}><a href='/'>
                <Button className={props.classes['login' + type]} ><a href='/login'>Log In </a> </Button>
                <Button className={props.classes['register' + type]} ><a href='/register'>Register</a> </Button>
                <IconButton className={props.classes['favoriteBorder' + type]}>
                    <a><FavoriteBorder /></a>
                </IconButton>
            </a>
            </div>

            <Autocomplete className={props.classes['autocomplete' + type]} />
        </div>
    );
}


const stylesToolbar = {
    root: {
        textAlign: 'center'
    },
    rootResult: {
        textAlign: 'left',
        background: 'red'
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
    },
///////////////////////////// 
    rootResults: {
        //textAlign: 'center',
        backgroundColor: '#FCEDAB ',
        marginLeft: '-10px',
        marginRight: '-10px',
        marginTop: '-10px'
    },
    rootResultResults: {
        textAlign: 'left',
        background: 'red'
    },
    textFiledRootResults: {
        backgroundColor: 'FFFFFF'
    },
    chipAddResults: {
        backgroundColor: '#DCEDC1'
    },
    chipRemoveResults: {
        backgroundColor: '#FFAAA5'
    },
    logoResults: {
        // left: '40% !important',
        // right: '40% !important',
        marginLeft: '20px',
        // marginRight: '90',            
    },
    buttonsResults: {
        float: 'right'
    },
    loginResults: {
        background: 'white !important',
        borderRadius: '25px !important',
        border: 0,
        color: 'black !important',
        height: 48,
        width: 90,
        padding: '0 30px',
        margin: '2px !important'
    },
    registerResults: {
        background: 'white !important',
        borderRadius: '25px !important',
        border: 0,
        color: 'black !important',
        height: 48,
        width: 90,
        padding: '0 30px',
        margin: '2px !important'
    },
    favoriteBorderResults: {
        color: 'white !important',
        fontSize: '25px',
        marginRight: '50px !important',
    },
    autocompleteResults: {
        textAlign: 'center',
        width: '40%',
    }
}


export default withStyles(stylesToolbar)(toolbar); 