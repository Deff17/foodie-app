import React, {Fragment} from 'react'
import {MenuItem} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import {withStyles} from '@material-ui/styles';

const suggestionIngredient = (props) => {

    const {suggestion, handleClick} = props;


    return (
        <Fragment>
            <MenuItem className={props.classes.item}>
                {suggestion.value}
                <div className={props.classes.buttons}>
                    <AddIcon className={props.classes.add} onClick={() => handleClick(suggestion, 'add')}/>
                    <Remove className={props.classes.remove} onClick={() => handleClick(suggestion, 'remove')}/>
                </div>
            </MenuItem>
        </Fragment>
    )
};

const styles = {
    add: {
        backgroundColor: '#DCEDC1 !important',
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px',
        color: '#AFBE98',
        width: '1.3em !important',
        '&:hover': {
            backgroundColor: '#cbe6a0 !important'
        }
    },
    remove: {
        backgroundColor: '#FFAAA5 !important',
        color: '#C1837F',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        width: '1.3em !important',
        '&:hover': {
            backgroundColor: '#ff9b94 !important'
        }
    },
    buttons: {
        marginLeft: 'auto',
        display: 'flex;',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        transition: 'none !important'
    }
};

export default withStyles(styles)(suggestionIngredient);