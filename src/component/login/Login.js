import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Route from 'react-router-dom';

const login = (props) => {


    return (
        <div>
            <p> Sign In </p>
            <TextField
                defaultValue=" Your email"
            />
            <TextField
                defaultValue=" Your password"
            />


            <Button>
                SIGN IN
            </Button>

            <p>Don't have an account? <a> Sign up </a></p>
            


        </div>
    )
};

export default login;