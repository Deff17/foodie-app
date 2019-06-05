import React, {Fragment} from 'react'
import { MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const suggestionIngredient = (props) => {

    const {suggestion, handleClick} = props;


    return (
        <Fragment>
            <MenuItem>
                {suggestion.value}
            </MenuItem>
            <AddIcon onClick={() => handleClick(suggestion, 'add')}/>
            <Remove onClick={() => handleClick(suggestion, 'remove')}/>
        </Fragment>
    )
};

export default suggestionIngredient;