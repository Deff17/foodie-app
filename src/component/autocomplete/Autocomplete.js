import React, { Component, Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import deburr from 'lodash/deburr';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import SuggestionIngredient from './suggestion/Suggestion'
import SearchIcon from '@material-ui/icons/Search';

import styles from './Autocomplete.css'
import { withStyles } from '@material-ui/styles';

const suggestionsItems = [
    { label: 'Chicken' },
    { label: 'Lemon' },
    { label: 'Orange' },
    { label: 'Pepper' },
    { label: 'Salmon' },
    { label: 'Sugar' },
    { label: 'Backon' },
    { label: 'Carrot' },
    { label: 'Plum' },
    { label: 'Turkey' },
    { label: 'Apple' },
    { label: 'Cucumber' },
    { label: 'Lettuce' },
    { label: 'Cheese' },
    { label: 'Cream' },
    { label: 'Milk' },
    { label: 'Flour' },
    { label: 'Sesame seeds' },
    { label: 'Pasta' },
    { label: 'Tomato' },
    { label: 'Potato' },
    { label: 'Paprika' },
    { label: 'Pepper' },
    { label: 'Cottage cheese' },
    { label: 'Parmesan' },
    { label: 'Egg' },
    { label: 'Oil' },
    { label: 'Onion' },
    { label: 'Garlic' },
    { label: 'Basil' },
    { label: 'Zucchini' },
    { label: 'Cabbage' },
    { label: 'Broccoli' },
    { label: 'Beef steak' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const suggestionsRecipes = [
    { label: 'Chicken in tomato souce' },
    { label: 'Lemon chicken' },
    { label: 'Orange pie' },
    { label: 'Cheesecake' },
    { label: 'Spicy Salmon with Garlic Souce' },
    { label: 'Spicy Chicken' },
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItems: [],
            inputValue: '',
            filteredItems: [],
            filteredRecipes: [],
            activeItem: 0,
            isOpen: false,
        };

        this.textInput = React.createRef();
    }

    getChipItem = item => {
        return (
            <Chip
                key={item.label}
                label={item.label}
                color={item.type === 'add' ? 'primary' : 'secondary' }
                onDelete={this.handleDelete}
            />
        )
    }

    handleKeyDown = event => {
        const {inputValue, selectedItems} = {...this.state};
        if (selectedItems.length && !inputValue.length && event.key === 'Backspace') {
            selectedItems.splice(selectedItems.length - 1, 1);
            this.setState({ selectedItems });
            // newSelectedItems.splice(newSelectedItems.length - 1, 1);
            // this.setState({ selectedItems: newSelectedItems });
            // newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
            // this.setState(selectedItems.slice(0, selectedItems.length - 1));
        }

        if (event.keyCode === 38) {
            if (this.state.activeItem === 0)
                return;

            this.setState({ activeItem: this.state.activeItem - 1 })

        } else if (event.keyCode === 40) {
            //alert(this.state.activeItem)
            if (this.state.activeItem - 1 === this.state.filteredItems.length)
                return;
            this.setState({ activeItem: this.state.activeItem + 1 })
        }

        // if (event.keyCode === 13) {

        //     let newSelectedItems = [...this.state.selectedItems];
        //     if (newSelectedItems.indexOf(item) === -1) {
        //         newSelectedItems = [...newSelectedItems, item];
        //     }
        //     this.setState({ inputValue: '', selectedItems: newSelectedItems });
        // }
    }

    handleInputChange = event => {
        const newFilteredItems = this.getSuggestions(event.target.value, suggestionsItems)
        const newFilteredRecipes = this.getSuggestions(event.target.value, suggestionsRecipes)
        const isAnyItemToShow = newFilteredItems.length !== 0 || newFilteredRecipes.length !== 0
        this.setState({ inputValue: event.target.value, filteredItems: newFilteredItems, filteredRecipes: newFilteredRecipes, isOpen: isAnyItemToShow });
    }

    handleClickItem = (item, type) => {
        let newSelectedItems = [...this.state.selectedItems];
        item.type = type;
        if (newSelectedItems.indexOf(item) === -1) {
            newSelectedItems = [...newSelectedItems, item];
        }
        this.setState({ inputValue: '', selectedItems: newSelectedItems, isOpen: false });
        this.textInput.current.focus();
    }

    handleClickRecipe = item => {
        this.setState({ inputValue: item.value , selectedItems: [], isOpen: false });
        this.textInput.current.focus();
    }

    handleDelete = item => {
        const newSelectedItems = [...this.state.selectedItems];
        newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
        this.setState({ selectedItems: newSelectedItems });
    }

    getSuggestions = (value, suggestionsList, { showEmpty = false } = {}) => {
        const inputValue = deburr(value.trim()).toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        return inputLength === 0 && !showEmpty
            ? []
            : suggestionsList.filter(suggestion => {
                const keep =
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

                if (keep) {
                    count += 1;
                }

                return keep;
            });
    }

    render() {
        return (
            <div className={this.props.classes.Autocomplete}>
                <TextField
                    className={styles.root}
                    variant='filled'
                    InputProps={{ startAdornment: this.state.selectedItems.map(item => this.getChipItem(item)) }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    inputRef={this.textInput}
                />
                <a href='/results' ><SearchIcon/></a>
                {this.state.isOpen ? <Paper square>
                    {<div>
                        <div>{
                            this.state.filteredItems.map((suggestion, index) =>
                                (
                                    // <MenuItem
                                    //     key={suggestion.value}
                                    //     onClick={() => this.handleChange(suggestion)}
                                    //     selected={index === this.state.activeItem}
                                    // >
                                    //     {suggestion.value}
                                    // </MenuItem>
                                    <SuggestionIngredient
                                        key={suggestion.value}
                                        suggestion={suggestion}
                                        handleClick={this.handleClickItem}
                                    />
                                )
                            )
                        }
                        </div>
                        <hr />
                        <div>
                            {
                                this.state.filteredRecipes.map(suggestion => (
                                    <MenuItem
                                        key={suggestion.value}
                                        onClick={() => this.handleClickRecipe(suggestion)}
                                    >
                                        {suggestion.value}
                                    </MenuItem>
                                ))
                            }
                        </div>
                    </div>
                    }
                </Paper> : null}
            </div>
        )
    }

}


export default Autocomplete;


