import React, { Component } from 'react';
import Toolbar from '../../component/toolbar/Toolbar';
import Result from '../../component/result/Result';
import Route from 'react-router-dom';
import classes from './Results.css';

const recipes = [{
    ingridients: ['Salmon', 'Pepper', 'Egg'],
    title: 'Salmon with papper',
    recepie: ' DOOOOOOOOOOOOOOOOOOOO IT, JUST DOOOOOOOOOOOO IT, IT\'S just SALMON'
}, {
    ingridients: ['Apple', 'Lemon', 'Egg', 'Flour'],
    title: 'APPLE PIE',
    recepie: ' DOOOOOOOOOOOOOOOOOOOO IT, JUST DOOOOOOOOOOOO IT, IT\'S just APPLE PIE'
},
{
    ingridients: ['Chicken', 'Lemon', 'Tomato'],
    title: 'Chicken in tomato souce',
    recipe: ' DOOOOOOOOOOOOOOOOOOOO IT, JUST DOOOOOOOOOOOO IT, IT\'S just Chicken in tomato souce'
}
]

class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItems: JSON.parse(localStorage.getItem('SelectedItems')),
        }
    }

    getRecipes = (recipes) => {
        const addedItems = this.state.selectedItems.filter(item => item.type === 'add');
        const removedItems = this.state.selectedItems.filter(item => item.type === 'remove');
        console.log(removedItems)
        // const properRecipes = recipes.filter(recipe => { recipe.some(r=> addedItems.indexOf(r) >= 0) && !recipe.some(r=> removedItems.indexOf(r) >= 0)})
        // console.log(properRecipes)
        return [];

    }

    render() {
        console.log('RESULT')
        console.log(this.state.selectedItems)
        return (
            <div >
                <Toolbar isMainPage={false} />
                {
                    this.getRecipes(recipes).map(recipe => {
                        return (<Result key={recipe.title} title={recipe.title} recipe={recipe.recipe} ingridients={recipe.ingridients}/>)
                    })
                }

            </div>
        )
    }

}




export default Results;