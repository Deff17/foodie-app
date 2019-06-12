import React from 'react'
import {makeStyles, withStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import StarRatingComponent from 'react-star-rating-component';

const result = (props) => {

    let pic = pic1

    switch (props.id) {
        case '1':
            pic = pic1
          break;
        case '2':
            pic = pic2;
                break;
        case '3':
            pic = pic2;
                break;
    }
    console.log(pic);
    console.log("PIC ");
    return (
        <div className={props.classes.root}>
           <a href='/recipe' onClick={() => props.onResultClick(props.recipeObject)}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={props.classes.paperImg}>
                        <img className={props.classes.logo} alt='icon' src={pic}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={props.classes.paper}>
                        <strong>
                            {props.title}
                        </strong>
                        <p>{props.recipe}</p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <strong>Recipe matching:</strong>
                        <h1>92%</h1>
                        <p>User rating:</p>
                        <StarRatingComponent
                            name={'rating1'}
                            editing={true}/>
                    </Paper>
                </Grid>
            </Grid>
            </a>
        </div>
    )
};

const stylesResult = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center'
    },
    logo: {
        width: '50%'
        // width: '100% !important',
        // height: '100% !important'
    },
    paperImg: {
        height: '40px !important',
        width: '80px !important'
    }
}));

export default withStyles(stylesResult)(result);