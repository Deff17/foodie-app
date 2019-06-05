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

            <TextField
                defaultValue=" Repeat password"
            />


            <Button>
                SIGN UP
            </Button>

            <p>Have an account? <a> Sign in </a></p>



        </div>
    )
};

export default login;