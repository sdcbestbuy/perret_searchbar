//library imports
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

//Local components
import Stars from './Stars.jsx';

//helper function
import shorthenNameOnHyphen from '../../../helpers/shorthenNameOnHyphen.js';

const SearchBar = ({ suggestions }) => {
    //userInput is State, set state is 2nd argument (String)
    const [userInput, setUserInput] = useState('');
    // Index of item that is selected by user (Number)
    const [activeSuggestions, setActiveSuggestions] = useState(0);
    // List of items from db that match filter ---
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // Boolean Value to show or display suggestions ---
    const [showSuggestions, setSuggestions] = useState(false);
    //The currently search for suggestion (the product that was selected)
    const [selectedSuggestion, setSelectedSuggestion] = useState({});

    //limit the size of the suggestion list by 13 items only
    //best buy site has a 13 item limit as well, can be changed to any number greater than zero
    const suggestionsSizeLimit = 13; 

    const handleSubmit = (event) => {
      //prevent http event
      event.preventDefault();
      //The form can only be submitted if users has a selected suggestion
      //if it doesn't the item closest to the user's search will be selected
      
        //Check to see if a suggestion has been selected
        if(selectedSuggestion){
          setWindowId(selectedSuggestion.id);
        } else {
        //Otherwise assign closest 
        console.log('okayyyy');
        }
    };

    const setWindowId = (id) => {
      window.id = id;
      console.log('window id',window.id);
    };

    const handleInputBarChange = e => {
      //set state to currently typed input
      const userInput = e.currentTarget.value;
      // Filter out suggestions that don't contain the user's current input
      let newFilteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion.product_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      
      //set a suggestion limit ammounnt to the size limit
      if ( newFilteredSuggestions.length >  suggestionsSizeLimit ) {
        newFilteredSuggestions = newFilteredSuggestions.slice(0, suggestionsSizeLimit);
      }
      //initialize index
      setActiveSuggestions(0);
      //filter as it changes
      setFilteredSuggestions(newFilteredSuggestions);
      //show suggestions
      setSuggestions(true);
      //set input text 
      setUserInput(e.currentTarget.value);
    };

  const handleClickedSuggestion = e => {
    // reset search index
    setActiveSuggestions(0);
    //suggestion list reset
    setFilteredSuggestions([]);
    //drop down no longer showing
    setSuggestions(false);
    //user input set to clicked on suggestion
    setUserInput(e.currentTarget.innerText);
    //retirieve index of item clicked on
    const clickedIndex = e.currentTarget.getAttribute("data-index");
    //set the selected item to be the clicked on item
    setSelectedSuggestion(filteredSuggestions[clickedIndex]);
    //trigger form submission
    handleSubmit(e);
  };

  const handleKeyboardEvent = e => {
    if (e.keyCode === 13) {   //enter key
      // prevent form from submmiting on enter
      e.preventDefault();
      //reset index
      setActiveSuggestions(0);
      //reset suggestion list
      setFilteredSuggestions([]);
      //stop showing dropdown
      setSuggestions(false);
      // set input bar text to product name
      setUserInput(filteredSuggestions[activeSuggestions].product_name);
      // set select suggestion to object selected
      setSelectedSuggestion(filteredSuggestions[activeSuggestions]);
      //trigger form submission
      handleSubmit(e);
    }
    else if (e.keyCode === 38) { //Up arrow key
      ///up arrow changes user's selection
      if (activeSuggestions === 0) {
        //don't do anything
        return;
      }
      //decrease active index by 1
      setActiveSuggestions(activeSuggestions -1);
    }
    else if (e.keyCode === 40) { //down arrow
      // key holding key to slect suggestions
      if (activeSuggestions  === filteredSuggestions.length - 1) {
        //re-loop
        setActiveSuggestions(0);
      } else {
        //increment index by 1
        setActiveSuggestions(activeSuggestions + 1);
      }
    }
  };

  //function triggered by the x button
  const handleClear = () => {
    //reset state
    //reset user input
    setUserInput('');
    // reset select item
    setSelectedSuggestion({});
    //reset filtered suggestions
    setFilteredSuggestions([]);
  };

  let suggestionsListComponent;
  let clearInputButton;

  //If user input is not empty
  if(userInput){
    clearInputButton = (
      <button 
        onClick={ handleClear }
        className="x-button"
      >
        <ClearIcon/>
      </button>
    );
  }

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) { 
      suggestionsListComponent = (
        <div className="suggestions-dropdown">
          <div className="left-suggestion-container">
            { filteredSuggestions.map((suggestion, index) => {
              //whitespace needed
              let className = 'suggestion ';
              //conditional styling
              if (index === activeSuggestions) {
                className += "suggestion-active";
              }
              //
              return (
                <div
                  className={ className }
                  key={ suggestion.id }
                  onClick={ handleClickedSuggestion }
                  data-index={ index }
                >
                  { shorthenNameOnHyphen(suggestion.product_name) }
                </div>
              );
            })}
          </div>
          <div className="right-suggestion-container">
            {/* dd prefix stands for drop drown */}
            <div className="dd-product-container">
              <div>
                <div className="dd-img-container">
                  <img className="dd-img" src={ filteredSuggestions[activeSuggestions].product_image }/>
                </div>
                <p className="dd-name">{ filteredSuggestions[activeSuggestions].product_name }</p>
                <p>
                  { filteredSuggestions[activeSuggestions].regularPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD'}) }
                </p>
                <Stars product={ filteredSuggestions[activeSuggestions] }/>
                <p className="dd-description">
                  { filteredSuggestions[activeSuggestions].shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      suggestionsListComponent = (
        <div className="suggestions-dropdown">
          <em>There is nothing on the store matching your search, please try something else.</em>
        </div>
      );
    }
  }

    return(
      <div className="search-bar-container">
        <form className="search-bar" onSubmit={ handleSubmit }>
          <input
            placeholder="Search Best Buy"
            type="text" 
            value={ userInput }
            onKeyDown={ handleKeyboardEvent }
            onChange={ handleInputBarChange }
            className="search-input"
            required
          />
          { clearInputButton }
          <button className="header-search-button">
            <SearchIcon className="seacrh-icon"/>
          </button>
        </form>
        {/* this is the dropdown that condionally renders */}
        { suggestionsListComponent }
      </div>
    );
};

export default SearchBar;