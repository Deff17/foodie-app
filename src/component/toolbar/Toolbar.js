import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/Favorite';
import Autocomplete from '../autocomplete/Autocomplete';
import {withStyles} from '@material-ui/styles';


const toolbar = (props) => {

    const type = props.isMainPage ? '' : 'Results';

    return (
        <div className={props.classes['root' + type]}>
            <div className={props.classes['buttons' + type]}>
                <a href='/'>
                    <IconButton className={props.classes['favoriteBorder' + type]}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a><FavoriteBorder className={props.classes['heart' + type]}/></a>
                    </IconButton>
                    <Button className={props.classes['login' + type]}><a href='/login'>Sign in</a> </Button>
                    <Button className={props.classes['register' + type]}><a href='/register'>Sign up</a> </Button>
                </a>
            </div>
            <div className={props.classes['logoBox' + type]}>
                <h1 className={props.classes['logo' + type]}><a href='/'>Foodie</a></h1>
                <h1 className={props.classes['underLogo' + type]}>find your perfect recipe</h1>
            </div>
            <Autocomplete className={props.classes['autocomplete' + type]} isResultsPage={!props.isMainPage}/>
        </div>
    );
}


const stylesToolbar = {
    root: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
    },
    rootResult: {
        textAlign: 'left',
        background: 'red',
        flexDirection: 'column'
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
    logoBox: {
        //nothing
    },
    logo: {
        fontFamily: "Ink Free Regular",
        fontSize: '6rem',
        textShadow: '0px 2px 6px rgba(0,0,0,0.5)',
        color: 'white',
        margin: "50px 0 0 0"
    },
    underLogo : {
        fontFamily: "Ink Free Regular",
        color: 'rgba(255,255,255,0.9)',
        margin: "0 0 50px 0"
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '15px !important',
        marginRight: '30px !important'
    },
    login: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '800 !important',
        background: 'white !important',
        borderRadius: '31px !important',
        border: '1px solid #FFC834 !important',
        color: '#FFC834 !important',
        height: 40,
        width: 120,
        padding: '0 30px',
        margin: '2px !important',
    },
    register: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '800 !important',
        background: 'white !important',
        borderRadius: '25px !important',
        border: '1px solid #FFC834 !important',
        color: '#FFC834 !important',
        height: 40,
        width: 120,
        padding: '0 30px',
        margin: '2px !important',
    },
    favoriteBorder: {

        color: 'white !important',
        padding: '8px !important',
        border: '0 !important',
        '&:hover': {
            backgroundColor: 'transparent !important'
        }

    },
    heart: {
        fontSize: '40px !important',
        border: '0 !important',
    },
///////////////////////////// 
    rootResults: {
        //textAlign: 'center',
        backgroundColor: '#FCEDAB ',
        marginLeft: '-12px',
        marginRight: '-12px',
        marginTop: '-12px',
        width: '100%',
        height: '190px',
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
        float: 'left',
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
        paddingTop: '50px',
    }
}


export default withStyles(stylesToolbar)(toolbar); 