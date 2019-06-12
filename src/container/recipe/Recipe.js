import React from 'react';
import Autocomplete from "../../component/autocomplete/Autocomplete";
import {withStyles} from '@material-ui/styles';
import RoastChicken from './roast-chicken-legs.jpg';
import StarYellow from './star-yellow.png';
import StarRed from './star-red.png';
import StarGrey from './star-grey.png';
import Rating from "react-rating";


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
                    <img src={RoastChicken} className={props.classes.image}/>
                    <Rating
                        className={props.classes.rating}
                        placeholderRating={3.5}
                        emptySymbol={<img src={StarGrey} className={props.classes.star}/>}
                        placeholderSymbol={<img src={StarRed} className={props.classes.star}/>}
                        fullSymbol={<img src={StarYellow} className={props.classes.star}/>}
                    />


                    <h1 className={props.classes.title}>{recipeObject.title}</h1>

                    <div className={props.classes.descriptionGrid}>

                        <div className={props.classes.itemIngredientsTitleCell}>
                            Ingredients
                        </div>
                        <div className={props.classes.itemIngredientsCell}>
                            <div className={props.classes.itemIngredients}>
                                <ul> {recipeObject.ingridients.map(ingredient => (<li>
                                    <span>{ingredient}</span>
                                </li>))

                                }
                                </ul>
                            </div>
                        </div>

                        <div className={props.classes.itemDescriptionTitleCell}>
                            Description
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


}
const stylesRecipe = {
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
        marginRight:'20px',
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