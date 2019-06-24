import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/Favorite';
import Autocomplete from '../autocomplete/Autocomplete';
import {withStyles} from '@material-ui/styles';


const toolbar = (props) => {
    if (props.isMainPage) {
        return (
            <div className={props.classes.root}>
                <div className={props.classes.buttons}>
                    <a href='/'>
                        <IconButton className={props.classes.favoriteBorder}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><FavoriteBorder className={props.classes.heart}/></a>
                        </IconButton>
                        <Button className={props.classes.login}><a href='/login'>Sign in</a> </Button>
                        <Button className={props.classes.register}><a href='/register'>Sign up</a> </Button>
                    </a>
                </div>
                <div className={props.classes.logoBox}>
                    <h1 className={props.classes.logo}><a href='/'>Foodie</a></h1>
                    <h1 className={props.classes.underLogo}>find your perfect recipe</h1>
                </div>
                <Autocomplete isResultsPage={!props.isMainPage}/>
            </div>
        );
    }
    return (
        <div className={props.classes.rootResults}>
            <h1 className={props.classes.logoResults}><a href='/'>Foodie</a></h1>
            <Autocomplete isResultsPage={!props.isMainPage}/>
            <div className={props.classes.buttonsResults}>
                <a href='/'>
                    <IconButton className={props.classes.favoriteBorder}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a><FavoriteBorder className={props.classes.heart}/></a>
                    </IconButton>
                    <Button className={props.classes.login}><a href='/login'>Sign in</a> </Button>
                    <Button className={props.classes.register}><a href='/register'>Sign up</a> </Button>
                </a>
            </div>
        </div>
    );
};


const stylesToolbar = {
    root: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
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
        fontSize: '7rem',
        textShadow: '0px 2px 6px rgba(0,0,0,0.5)',
        color: 'white',
        margin: "70px 0 0 0"
    },
    underLogo: {
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
        '&:hover': {
            border: '1px solid #FFBA00 !important',
            color: '#FFBA00 !important',
        }
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
        '&:hover': {
            border: '1px solid #FFBA00 !important',
            color: '#FFBA00 !important',
        }
    },
    favoriteBorder: {
        color: 'white !important',
        padding: '8px !important',
        border: '0 !important',
        '&:hover': {
            backgroundColor: 'transparent !important'
        },
        '& span a svg:hover': {
            fill: '#FFBA00 !important'
        }

    },
    heart: {
        fontSize: '40px !important',
        border: '0 !important',
    },
/////////////////////////////
    rootResults: {
        backgroundColor: '#FCEDAB ',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0 4px 5px -2px rgba(0,0,0,0.2)',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            height: '200px',
        },
    },
    logoResults: {
        marginLeft: '50px',
        marginTop: '20px',
        marginBottom: '20px',
        float: 'left',
        fontFamily: "Ink Free Regular",
        fontSize: '4rem',
        textShadow: '0px 2px 6px rgba(0,0,0,0.5)',
        color: 'white',
        zIndex: 5
    },
    buttonsResults: {
        marginLeft: 'auto',
        marginRight: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '30px !important',

    }
};


export default withStyles(stylesToolbar)(toolbar);
