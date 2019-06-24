import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import deburr from 'lodash/deburr';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import SuggestionIngredient from './suggestion/Suggestion'
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {withStyles} from '@material-ui/styles';

const suggestionsItems = [
    {label: 'Chicken'},
    {label: 'Lemon'},
    {label: 'Orange'},
    {label: 'Pepper'},
    {label: 'Rum'},
    {label: 'Radish'},
    {label: 'Salmon'},
    {label: 'Sugar'},
    {label: 'Backon'},
    {label: 'Carrot'},
    {label: 'Plum'},
    {label: 'Turkey'},
    {label: 'Apple'},
    {label: 'Cucumber'},
    {label: 'Lettuce'},
    {label: 'Cheese'},
    {label: 'Cream'},
    {label: 'Milk'},
    {label: 'Flour'},
    {label: 'Sesame seeds'},
    {label: 'Pasta'},
    {label: 'Tomato'},
    {label: 'Potato'},
    {label: 'Paprika'},
    {label: 'Pepper'},
    {label: 'Cottage cheese'},
    {label: 'Parmesan'},
    {label: 'Egg'},
    {label: 'Oil'},
    {label: 'Onion'},
    {label: 'Garlic'},
    {label: 'Basil'},
    {label: 'Zucchini'},
    {label: 'Cabbage'},
    {label: 'Broccoli'},
    {label: 'Beef steak'},
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const suggestionsRecipes = [
    {label: 'Chicken in tomato souce'},
    {label: 'Lemon chicken'},
    {label: 'Orange pie'},
    {label: 'Cheesecake'},
    {label: 'Spicy Salmon with Garlic Souce'},
    {label: 'Spicy Chicken'},
    {label: 'Roast Chicken Legs with Thyme and Lemon'}
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

class Autocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: JSON.parse(localStorage.getItem('SelectedItems')) || [], //[], //localStorage.getItem('SelectedItems') || [],
            inputValue: localStorage.getItem('InputValue') || '',//'', //localStorage.getItem('InputValue') || '',
            filteredItems: [],
            filteredRecipes: [],
            activeItem: 0,
            isOpen: false,
            isModelOpen: false
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
    };

    handleKeyDown = event => {
        const {inputValue, selectedItems} = {...this.state};
        if (selectedItems.length && !inputValue.length && event.key === 'Backspace') {
            selectedItems.splice(selectedItems.length - 1, 1);
            this.setState({selectedItems});
            localStorage.setItem('SelectedItems', JSON.stringify(selectedItems));
            window.selectedItems = selectedItems

        }
        if (event.keyCode === 38) {
            if (this.state.activeItem === 0)
                return;

            this.setState({activeItem: this.state.activeItem - 1})

        } else if (event.keyCode === 40) {
            if (this.state.activeItem - 1 === this.state.filteredItems.length)
                return;
            this.setState({activeItem: this.state.activeItem + 1})
        }
    };

    handleInputChange = event => {
        const newFilteredItems = this.getSuggestions(event.target.value, suggestionsItems)
        const newFilteredRecipes = this.getSuggestions(event.target.value, suggestionsRecipes)
        const isAnyItemToShow = newFilteredItems.length !== 0 || newFilteredRecipes.length !== 0
        this.setState({
            inputValue: event.target.value,
            filteredItems: newFilteredItems,
            filteredRecipes: newFilteredRecipes,
            isOpen: isAnyItemToShow
        });
    };

    handleClickItem = (item, type) => {
        let newSelectedItems = [...this.state.selectedItems];
        item.type = type;
        if (newSelectedItems.indexOf(item) === -1) {
            newSelectedItems = [...newSelectedItems, item];
        }
        this.setState({inputValue: '', selectedItems: newSelectedItems, isOpen: false});
        this.textInput.current.focus();
        localStorage.setItem('SelectedItems', JSON.stringify(newSelectedItems));
        window.selectedItems = newSelectedItems
        localStorage.setItem('InputValue', '');
    };

    handleClickRecipe = item => {
        this.setState({inputValue: item.value, selectedItems: [], isOpen: false});
        this.textInput.current.focus();
        localStorage.setItem('SelectedItems', JSON.stringify([]));
        window.selectedItems = []
        localStorage.setItem('InputValue', JSON.stringify(item.value));
    };

    handleDelete = item => {
        const newSelectedItems = [...this.state.selectedItems];
        newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
        this.setState({selectedItems: newSelectedItems});
        localStorage.setItem('SelectedItems', JSON.stringify(newSelectedItems));
        window.selectedItems = newSelectedItems
    };

    getSuggestions = (value, suggestionsList, {showEmpty = false} = {}) => {
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
    };

    handleModalOpen = () => {
        this.setState({isModalOpen: true})
    };

    handleModalClose = () => {
        this.setState({isModalOpen: false})
    };

    render() {
        return (
            <div className={this.props.isResultsPage ? this.props.classes.rootResults : this.props.classes.root}>
                <div className={this.props.classes.searchBar}>
                    <div className={this.props.classes.advanceSearch}>
                        <button className={this.props.classes.advanceSearchButton} onClick={this.handleModalOpen}>
                            Advance search
                        </button>
                    </div>
                    <TextField
                        className={this.props.classes.textField}
                        variant='filled'
                        InputProps={{
                            className: this.props.classes.input,
                            disableUnderline: true,
                            startAdornment: this.state.selectedItems.map(item => this.getChipItem(item))//, this.getChipFromInput(this.state.inputValue)]
                        }}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleInputChange}
                        value={this.state.inputValue}
                        inputRef={this.textInput}
                    >
                    </TextField>
                    <a href='/results' className={this.props.classes.aTagSearch}>
                        <SearchIcon className={this.props.classes.search}/>
                    </a>
                </div>
                {this.state.isOpen ? <Paper square className={this.props.classes.paper}>
                    {<div>
                        <div className={this.props.classes.ingredientItems}>{
                            this.state.filteredItems.map((suggestion, index) =>
                                <SuggestionIngredient
                                    key={suggestion.value}
                                    suggestion={suggestion}
                                    handleClick={this.handleClickItem}
                                />
                            )
                        }
                        </div>
                        <hr/>
                        <div className={this.props.classes.mealItems}>{
                            this.state.filteredRecipes.map(suggestion => (
                                <MenuItem
                                    className={this.props.classes.singleMeal}
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
                {/*    ************* Moda************  */}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.isModalOpen}
                    onClose={this.handleModalClose}
                >
                    <div className={this.props.classes.modal}>
                        <Typography variant="h5">Advance foodie search</Typography>
                        <Typography variant="subtitle1">Adjust search result using below options</Typography>
                        <FormGroup column>
                            <FormControlLabel control={<Checkbox value="checkedB" color="green"/>} label="Vegan"/>
                            <FormControlLabel control={<Checkbox value="checkedC"/>} label="Gluten-free"/>
                            <FormControlLabel control={<Checkbox value="checkedD"/>} label="Low Sugar"/>
                        </FormGroup>
                        <TextField
                            id="outlined-number"
                            label="Number of Ingredients"
                            type="number"
                            className={this.props.classes.number}
                            placeholder={"ingredients"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-number"
                            label="Calories"
                            type="number"
                            placeholder={"kcal"}
                            className={this.props.classes.number2}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-number"
                            label="Portion Size"
                            type="number"
                            className={this.props.classes.number3}
                            placeholder={"people"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />

                    </div>
                </Modal>
            </div>
        )
    }

}

const stylesAutocomplete = {
    root: {
        textAlign: 'center',
        width: '100%',
    },
    rootResults: {
        textAlign: 'center',
        width: '100%',
        top: '15px',
        position: 'absolute',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            top: '100px',
        },

    },
    searchBar: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    advanceSearch: {
        marginRight: 'calc(60% / 2)',
        marginLeft: 'auto',
        width: '150px',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderTopRightRadius: '50px',
        borderTopLeftRadius: '50px',
    },
    advanceSearchButton: {
        color: '#848484',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '800 !important',
        fontSize: '0.85em',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        outline: 'none !important',
        '&:hover': {
            color: '#575757',
        }
    },
    chipAdd: {
        backgroundColor: '#DCEDC1 !important'
    },
    chipRemove: {
        backgroundColor: '#FFAAA5 !important'
    },
    textField: {
        width: '40%',
        minWidth: "20%",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        textAlign: 'center',
        backgroundColor: 'white !important',
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px',
    },
    input: {
        background: 'none !important',
        '& input': {
            padding: '19px 15px 18px 15px'
        }
    },
    paper: {
        width: '43%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '25px',
    },
    search: {
        background: 'white',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        padding: '10px',
        marginLeft: '0',
        fontSize: '36px !important',
        color: '#CACACA',
        '&:hover': {
            color: '#b9b9b9'
        },
    },
    aTagSearch: {
        width: 0,
        height: 0
    },
    ingredientItems: {
        '& li:first-child:hover': {
            borderRadius: '25px 25px 0 0',
        },
        '& li:first-child:focus': {
            borderRadius: '25px 25px 0 0',
        },
    },
    mealItems: {
        '& li:last-child:hover': {
            borderRadius: '0 0 25px 25px',
        },
        '& li:last-child:focus': {
            borderRadius: '0 0 25px 25px',
        },
    },
    singleMeal: {
        transition: 'none !important'
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: "rgba(255,255,255,0.96)",
        boxShadow: '0 4px 5px rgba(0,0,0,0.3)',
        padding: '10px 15px 10px 15px',
        outline: 'none',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '15px 15px 15px 15px',
        paddingLeft: '15px',
        paddingBottom: '10px',
        paddingRight: '25px'
    },

    number: {
        float: 'left',
        width: '40%',
    },
    number2: {
        width: '23.33%',

    },
    number3: {
        float: 'right',
        width: '30.33%',
    },
};
export default withStyles(stylesAutocomplete)(Autocomplete);

