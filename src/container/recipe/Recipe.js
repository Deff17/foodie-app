import {IconButton} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Comment from '@material-ui/icons/Comment';
import Favorite from '@material-ui/icons/Favorite';
import Print from '@material-ui/icons/Print';
import {withStyles} from '@material-ui/styles';
import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import Autocomplete from "../../component/autocomplete/Autocomplete";
import bigpic from "./bigpic.jpg";


var {SocialIcon} = require('react-social-icons');

const recipe = (props) => {

    const recipeObject = JSON.parse(localStorage.getItem('ClickedItem'))
    console.log('recipeObject')
    console.log(recipeObject)

    return (
        <div>
            <div>
                <Autocomplete isResultsPage={true}/>
            </div>
            <div className={props.classes.colorBox}>
                <div>
                    <IconButton href='/results'>
                        <ArrowBack/>
                        <span style={{marginLeft: "5px"}}>Back to the recipe list</span>
                    </IconButton>

                </div>
                <div>
                    <Grid container direction="row" spacing={0}>
                        <Grid items xs={9}>
                            <img src={bigpic} className={props.classes.image}/>
                        </Grid>
                        <Grid items xs={3} style={{textAlign: "center"}}>
                            <div>
                                <IconButton>
                                    <Favorite/>
                                </IconButton>
                                <br/>
                                <div style={{marginTop:"-5px", fontSize: "9px"}}>Love it</div>
                            </div>
                            <div>
                                <IconButton>
                                    <Print/>
                                </IconButton>
                                <br/>
                                <div style={{marginTop:"-5px", fontSize: "9px"}}>Print</div>
                            </div>
                            <div>
                                <IconButton>
                                    <Comment/>
                                </IconButton>
                                <br/>
                                <div style={{marginTop:"-5px", fontSize: "9px"}}>Comments</div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" spacing={0}
                          style={{marginTop: "30px", marginLeft: "40px", marginRight: "40px"}}>
                        <Grid item xs={4}>
                            Do you like this recipe? Share it :)
                            <div style={{marginTop: "30px"}}>
                                <SocialIcon network="twitter" url={"http://www.twitter.com"}
                                            className={props.classes.social}/>
                                <SocialIcon network="snapchat" url={"http://www.snapchat.com"}
                                            className={props.classes.social}/>
                                <SocialIcon network="facebook" url={"http://www.facebook.com"}
                                            className={props.classes.social}/>
                                <SocialIcon network="linkedin" url={"http://www.linkedin.com"}
                                            className={props.classes.social}/>
                                <SocialIcon network="whatsapp" url={"http://www.whatsapp.com"}
                                            className={props.classes.social}/>
                            </div>
                        </Grid>

                        <Grid item xs={4}>
                        </Grid>

                        <Grid item xs={4}>
                            <div>
                                <Grid container direction="row" spacing={0}>
                                    <Grid item xs={6}>
                                        <span>Rating</span>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <StarRatingComponent
                                            style={{textAlign: "right"}}
                                            name={Math.random()}
                                            editing={false}
                                            value={4}/>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{marginTop: "20px"}}>
                                <Grid container direction="row" spacing={0}>
                                    <Grid item xs={6}>
                                        <span>Your rating</span>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <StarRatingComponent
                                            style={{textAlign: "right"}}
                                            name={Math.random()}
                                            editing={true}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>


                    <h1 className={props.classes.title}>{recipeObject.title}</h1>

                    <div className={props.classes.descriptionGrid}>

                        <div className={props.classes.itemIngredientsTitleCell}>
                            <h3>Ingredients</h3>
                        </div>
                        <div className={props.classes.itemIngredientsCell}>
                            <div className={props.classes.itemIngredients}>
                                <ul> {
                                    recipeObject.ingridients.map(ingredient => (<li>
                                        <span>{ingredient}</span>
                                    </li>))

                                }
                                </ul>
                            </div>
                        </div>

                        <div className={props.classes.itemDescriptionTitleCell}>
                            <h3>Description</h3>
                        </div>
                        <div className={props.classes.itemDescriptionCell}>
                            <div className={props.classes.itemDescription}>
                                <p>
                                    2
                                    simply set the height to auto, that should fix the problem, because div are block
                                    elements so they stretch out to full width and height of any element contained in
                                    it. if height set to auto not working then simple don't add the height, it should
                                    adjust and make sure that the div is not inheriting any height from it's parent
                                    element as well... 2
                                    simply set the height to auto, that should fix the problem, because div are block
                                    elements so they stretch out to full width and height of any element contained in
                                    it. if height set to auto not working then simple don't add the height, it should
                                    adjust and make sure that the div is not inheriting any height from it's parent
                                    element as well... 2
                                    simply set the height to auto, that should fix the problem, because div are block
                                    elements so they stretch out to full width and height of any element contained in
                                    it. if height set to auto not working then simple don't add the height, it should
                                    adjust and make sure that the div is not inheriting any height from it's parent
                                    element as well... 2
                                    simply set the height to auto, that should fix the problem, because div are block
                                    elements so they stretch out to full width and height of any element contained in
                                    it. if height set to auto not working then simple don't add the height, it should
                                    adjust and make sure that the div is not inheriting any height from it's parent
                                    element as well...

                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )


};

const stylesRecipe = {
    social: {
        width: "25px",
        height: "25px",
        marginRight: "5px"
    },

    colorBox:
        {
            marginTop: '100px',
            marginBottom: '50px',
            margin: 'auto',
            backgroundColor: '#f2f2f2',
            width: '70%',
            height: 'auto',
            overflow: 'auto',
        },

    image: {
        margin: '30px',
        marginBottom: '0px',
        width: 'calc(100% - 60px)',
        maxHeight: '130px',
        objectFit: 'fill'
    },

    title: {

        margin: '5%',
        borderBottom: '1px solid grey',
        fontSize: '3vw',
        height: 'auto',
    },

    descriptionGrid: {

        display: 'grid',
        gridTemplateColumns: '5% 30% 10% 50% 5%',
        gridTemplateRows: '30px 20px auto 50px',

    },

    itemIngredientsTitleCell: {
        gridColumnStart: '2',
        gridColumnEnd: '2',
        gridRowStart: '1',
        gridRowEnd: '1',
    },

    itemDescriptionTitleCell: {
        gridColumnStart: '4',
        gridColumnEnd: '4',
        gridRowStart: '1',
        gridRowEnd: '1',
    },
    itemIngredientsCell: {
        gridColumnStart: '2',
        gridColumnEnd: '2',
        gridRowStart: '3',
        gridRowEnd: '3',
        backgroundColor: '#d6d6d6'
    },

    itemDescriptionCell: {
        gridColumnStart: '4',
        gridColumnEnd: '4',
        gridRowStart: '3',
        gridRowEnd: '3',
        backgroundColor: '#d6d6d6',
    },
    itemIngredients: {},

    itemDescription: {
        marginLeft: '20px',
        marginRight: '20px',
    },

    rating: {
        float: 'right',
        margin: '30px',
        marginTop: '0px',
    },
    star: {
        width: '25px',
        height: 'auto'

    }

}


export default withStyles(stylesRecipe)(recipe);