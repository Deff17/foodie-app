import React, { Fragment } from 'react'
import { MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { withStyles } from '@material-ui/styles';

const suggestionIngredient = (props) => {

    const { suggestion, handleClick } = props;


    return (
        <Fragment>
            <MenuItem className={props.classes.item}>
                {suggestion.value}
                <div className={props.classes.buttons}>
                <AddIcon className={props.classes.add} onClick={() => handleClick(suggestion, 'add')} />
                <Remove className={props.classes.remove} onClick={() => handleClick(suggestion, 'remove')} />
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
    },
    remove: {
        backgroundColor: '#FFAAA5 !important',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
    },
    buttons: {
        float: 'right',
    },
    item: {
        //float: 'left',
        width: '80%'
    }
}

export default withStyles(styles)(suggestionIngredient);