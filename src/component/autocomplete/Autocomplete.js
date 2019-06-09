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
        const style = item.type === 'add' ? this.props.classes.chipAdd : this.props.classes.chipRemove;
        return (
            <Chip
                className={style}
                key={item.label}
                label={item.label}
                onDelete={this.handleDelete}
            />
        )
    }

    handleKeyDown = event => {
        const {inputValue, selectedItems} = {...this.state};
        if (selectedItems.length && !inputValue.length && event.key === 'Backspace') {
            selectedItems.splice(selectedItems.length - 1, 1);
            this.setState({ selectedItems });

        }

        if (event.keyCode === 38) {
            if (this.state.activeItem === 0)
                return;

            this.setState({ activeItem: this.state.activeItem - 1 })

        } else if (event.keyCode === 40) {
            if (this.state.activeItem - 1 === this.state.filteredItems.length)
                return;
            this.setState({ activeItem: this.state.activeItem + 1 })
        }

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

    // getSearchIcon = () => (
    //     <a className={this.props.classes.anchor} href='/results' ><SearchIcon className={this.props.classes.search}/></a>
    // )

    render() {
        return (
            <div className={this.props.classes.root}>
                <TextField
                    className={this.props.classes.textField}
                    variant='filled'
                    InputProps={{className: this.props.classes.input, startAdornment: this.state.selectedItems.map(item => this.getChipItem(item)) }}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleInputChange}
                    value={this.state.inputValue}
                    inputRef={this.textInput}
                >
                
                </TextField >

                <a href='/results' ><SearchIcon className={this.props.classes.search}/></a>
                
                {this.state.isOpen ? <Paper square className={this.props.classes.paper}>
                    {<div>
                        <div>{
                            this.state.filteredItems.map((suggestion, index) =>
                                (
                                
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

const stylesAutocomplete = {
    root: {
        textAlign: 'center'
    },
    textFiledRoot :{
        backgroundColor: 'FFFFFF'
    },
    chipAdd: {
        backgroundColor: '#DCEDC1 !important'
    },
    chipRemove: {
        backgroundColor: '#FFAAA5 !important'
    },
    textField: {
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        textAlign: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px',
    },
    input: {
        background: 'none'
    },
    paper: {
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        borderRadius: '10px',
    },

    // anchor: {
    //     marginLeft: '95%',
    // },

    search: {
        fontSize: 'large',
        background: 'white',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        padding: '15px',
        marginLeft: '0',
        fontSize: '30px',
        color: '#D2D2D2'
    }

}

//'#DCEDC1' : '#FFAAA5'


export default withStyles(stylesAutocomplete)(Autocomplete);


