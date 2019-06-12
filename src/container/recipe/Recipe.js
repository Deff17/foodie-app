import React from 'react';
import Autocomplete from "../../component/autocomplete/Autocomplete";
import {withStyles} from '@material-ui/styles';
import RoastChicken from './roast-chicken-legs.jpg';


const recipe = (props) => {


    return (
        <div>
            <div>
                <Autocomplete isResultsPage={false}/>
            </div>
            <div className={props.classes.colorBox}>

                <div>
                    <img src={RoastChicken} className={props.classes.image}/>
                    <h1 className={props.classes.title}>dupa</h1>

                    <div className={props.classes.descriptionGrid}>

                        <div className={props.classes.itemIngredientsCell}>
                            <div className={props.classes.itemIngredients}>
                            <ul>
                                <li>
                                    <span>jeden cycek z kury</span>
                                </li>

                                <li>
                                    <span>duzo pieprzu</span>
                                </li>

                                <li>
                                    <span>czosnek</span>
                                </li>

                                <li>
                                    <span>cebula</span>
                                </li>

                                <li>
                                    <span>SOS SRI-CZA-CZA</span>
                                </li>

                                <li>
                                    <span>chilli</span>
                                </li>

                            </ul>
                            </div>
                        </div>

                        <div className={props.classes.itemDescriptionCell}>
                            <div className={props.classes.itemDescription}>
                            <p>
                                wez cycka pokrój go i usmaz.
                                Dopraw czosnkiem i cebula.
                                podawac z sosem SRI-CZA-CZA.


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