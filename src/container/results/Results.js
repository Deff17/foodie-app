import React, {Component} from 'react';
import Toolbar from '../../component/toolbar/Toolbar';
import Result from '../../component/result/Result';
import deburr from 'lodash/deburr';

const recipes = [{
    ingridients: ['Chicken', 'Lemon', 'Parsley'],
    title: "Roast Chicken Legs with Thyme and Lemon",
    recipe: 'This quick-and-easy, simple-and-delicious roasted chicken with lemon and rosemary is perfect for a weeknight sheet pan dinner or when you have guests.',
    id: '1'
}, {
    ingridients: ['Wheat Ramen Noodles', 'Jalapeno Chilli', 'Lime', 'Chicken', 'Curry'],
    title: 'Chicken Curry Ramen',
    recipe: 'This tasteful chicken noodle soup with zesty Asian flair features chicken broth, soy sauce, garlic, ginger and colourful vegetables, and it’s ready in less than 30 minutes.',
    id: '2'
},
{
    ingridients: ['Chicken', 'Lemon', 'Tomato', 'Garlic'],
    title: 'Chinese Fried Rice with Chicken and Vegetables',
    recipe: 'This is a staple of Thai cooking. Adjust species to your own tastes for a really great use for leftover rice! Thai basil has w different flavor than that of regular basil and makes all the different ini this recipe. It is fast and fairly dish, ideal for everyone.',
    id: '3'
}
];

class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItems: JSON.parse(localStorage.getItem('SelectedItems')),
            inputValue: localStorage.getItem('InputValue')

        }
    }

    getRecipes = (recipes) => {
        const fullRecipe = this.state.inputValue ? recipes.filter(recipe => deburr(recipe.title) === deburr(JSON.parse(this.state.inputValue))) : [];

        if (fullRecipe.length > 0) return fullRecipe;

        const addedItems = this.state.selectedItems.filter(item => item.type === 'add').map(i => i.value);
        const removedItems = this.state.selectedItems.filter(item => item.type === 'remove').map(i => i.value);
        console.log(removedItems);
        const properRecipes = recipes.filter(recipe => {
            //let keep = false;

            const foundAdded = recipe.ingridients.some(r => addedItems.includes(r));
            const foundeRemoved = recipe.ingridients.some(r => removedItems.includes(r));
            return foundAdded && !foundeRemoved
        });
        return properRecipes;

    };

    onResultClicked = (recipe) => {
        console.log(recipe);
        localStorage.setItem('ClickedItem', JSON.stringify(recipe));
    };

    render() {
        console.log(this.state.inputValue);
        console.log(this.state.inputValue);

        // console.log('RESULT')
        // console.log(this.state.selectedItems)
        return (
            <div >
                <Toolbar isMainPage={false} />
                {
                    this.getRecipes(recipes).map(recipe => {
                        return (<Result
                            onResultClick={this.onResultClicked}
                            key={recipe.title}
                            title={recipe.title}
                            recipe={recipe.recipe}
                            ingridients={recipe.ingridients}
                            id={recipe.id}
                            recipeObject={recipe}
                        />)
                    })
                }

            </div>
        )
    }

}




export default Results;