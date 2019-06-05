import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import ChipInput from 'material-ui-chip-input';
// import classes from './Tryout.css'
import { makeStyles } from '@material-ui/styles';

const Tryout = () => {

    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      });

    const classes = useStyles();

    const data = [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ];

    const inputProps = data.map(d => {
        return (
            <Chip
                key={d.key}
                label={d.label}
            />
        )
    })

    const chips = {startAdornment: inputProps}


        
        
        return (
            <Fragment>
                {/* <TextField>HI</TextField>
                <ChipInput classes={classes.root}
                    defaultValue={inputProps}
                    
                />

                <input className={classes.root}/> */}
                <TextField InputProps={chips}/>
            </Fragment>
        )

}

export default Tryout;