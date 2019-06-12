import React from 'react';
import Autocomplete from "../../component/autocomplete/Autocomplete";
import { withStyles } from '@material-ui/styles';
import RoastChicken from './roast-chicken-legs.jpg';


const recipe = (props) => {

    const recipeObject = JSON.parse(localStorage.getItem('ClickedItem'))
    console.log('recipeObject')
    console.log(recipeObject)

    return (
        <div>
            <div>
                <Autocomplete isResultsPage={false} />
            </div>
            <div className={props.classes.colorBox}>

                <div>
                    <img src={RoastChicken} className={props.classes.image} />
                    <h1 className={props.classes.title}>{recipeObject.title}</h1>

                    <div className={props.classes.descriptionGrid}>

                        <div className={props.classes.itemIngredientsCell}>
                            <div className={props.classes.itemIngredients}>
                                <ul> {recipeObject.ingridients.map(ingredient => (<li>
                                    <span>{ingredient}</span>
                                </li>))

                                }
                                </ul>
                            </div>
                        </div>

                        <div className={props.classes.itemDescriptionCell}>
                            <div className={props.classes.itemDescription}>
                                <p>
                                    {recipeObject.recipe}


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
        marginTop: '200px',
        margin: 'auto',
        backgroundColor: '#f2f2f2',
        width: '70%'
    },

    image: {
        margin: '30px',
        width: 'calc(100% - 60px)',
        maxHeight: '130px',
        objectFit: 'fill'
    },

    title: {
        textAlign: 'center'
    },

    descriptionGrid: {

        display: 'grid',
        gridTemplateColumns: '0% 30% 55% 0%',
        gridColumnGap: '5%',
    },

    itemIngredientsCell: {
        gridColumnStart: '2',
        gridColumnEnd: '2',
        backgroundColor: '#c2c2c2'

    },

    itemDescriptionCell: {
        gridColumnStart: '3',
        gridColumnEnd: '3',
        backgroundColor: '#c2c2c2'

    },
    itemIngredients: {
        margin: '15px',

    },

    itemDescription: {
        margin: '15px',

    },


}


export default withStyles(stylesRecipe)(recipe);