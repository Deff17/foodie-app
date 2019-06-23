import {Chip, IconButton} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import {makeStyles, withStyles} from "@material-ui/styles";
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";

const result = (props) => {

    let pic = pic1;

    switch (props.id) {
        case '1':
            pic = pic1;
            break;
        case '2':
            pic = pic2;
            break;
        case '3':
            pic = pic2;
            break;
    }

    return (
        <div className={props.classes.root}>
            <a href='/recipe' onClick={() => props.onResultClick(props.recipeObject)}>
                <Grid container direction="row" spacing={0}
                      justify="center"
                      alignItems="stretch"
                      style={{
                          alignItems: "stretch",
                          margin: "auto",
                          width: "70%",
                          minHeight: "200px",
                          marginTop: "30px",
                          marginBottom: "30px"
                      }}>
                    <Grid item xs={4} style={{backgroundColor: "#ffffff"}}>
                        <img className={props.classes.logo} alt='icon' src={pic} style={{
                            textAlign: "center", margin: 'auto',
                            display: 'block',
                            maxWidth: '100%',
                            maxHeight: '100%'
                        }}/>
                    </Grid>
                    <Grid item xs={6} style={{backgroundColor: "#ffffff"}}>
                        <div style={{marginTop: "30px", padding: "10px"}}>
                            <strong>
                                {props.title}
                            </strong>
                            <p>{props.recipe}</p>
                        </div>
                        <Grid container spacing={1}>
                            <Grid container item xs={1}>
                                <IconButton disabled={true}>
                                    <AddShoppingCart/>
                                </IconButton>

                            </Grid>
                            <Grid container item xs={11}>
                                <div style={{
                                    border: "1px solid #a8a8a8",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    margin: "3px"
                                }}>
                                    {
                                        props.ingridients.map(data => {
                                            return (
                                                <Chip
                                                    key={Math.random()}
                                                    label={data}

                                                    style={{margin: "6px", backgroundColor: "#b2b2b2"}}
                                                />
                                            );
                                        })
                                    }
                                    <IconButton disabled={true}>
                                        <KeyboardArrowDown/>
                                    </IconButton>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}
                          style={{textAlign: "center", backgroundColor: "#fff2cc", borderRadius: "0 30px 30px 0 "}}>
                        <br/>
                        <strong>Recipe matching:</strong>
                        <h1 style={{fontWeight: "900"}}>92%</h1>
                        <p>User score:</p>
                        <StarRatingComponent
                            name={Math.random()}
                            editing={true}/>
                    </Grid>
                </Grid>
            </a>
        </div>
    )
};

const stylesResult = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

export default withStyles(stylesResult)(result);