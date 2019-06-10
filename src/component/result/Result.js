import React from 'react'
import {makeStyles, withStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import StarRatingComponent from 'react-star-rating-component';

const result = (props) => {
    console.log(props);
    return (
        <div className={props.classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <img className={props.classes.logo} alt='icon' src={pic1} width={'50%'}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={props.classes.paper}>
                        <strong>
                            Roast Chicken Legs with Thyme and Lemon
                        </strong>
                        <p>This quick-and-easy, simple-and-delicious roasted chicken with lemon and rosemary is perfect
                            for a weeknight sheet pan dinner or when you have guests.</p>
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
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <img className={props.classes.logo} alt='icon' src={pic2} width={'50%'}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={props.classes.paper}>
                        <strong>
                            Chicken Curry Ramen
                        </strong>
                        <p>This tasteful chicken noodle soup with zesty Asian flair features chicken broth, soy sauce,
                            garlic, ginger and colourful vegetables, and it’s ready in less than 30 minutes.</p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <strong>Recipe matching:</strong>
                        <h1>85%</h1>
                        <p>User rating:</p>
                        <StarRatingComponent
                            name={'rating2'}
                            editing={true}/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <img className={props.classes.logo} alt='icon' src={pic1} width={'50%'}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={props.classes.paper}>
                        <strong>
                            Chinese Fried Rice with Chicken and Vegetables
                        </strong>
                        <p>This is a staple of Thai cooking. Adjust species to your own tastes for a really great use
                            for leftover rice! Thai basil has w different flavor than that of regular basil and makes
                            all the different ini this recipe. It is fast and fairly dish, ideal for everyone. </p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={props.classes.paper}>
                        <strong>Recipe matching:</strong>
                        <h1>79%</h1>
                        <p>User rating:</p>
                        <StarRatingComponent
                            name={'rating3'}
                            editing={true}/>
                    </Paper>
                </Grid>
            </Grid>
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
}));

export default withStyles(stylesResult)(result);