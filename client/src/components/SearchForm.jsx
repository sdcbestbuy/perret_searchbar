import React, { useState, useEffect }from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Starts from './Stars.jsx';


const SearchBar = ({ suggestions }) => {
    //userInput is State, set state is 2nd argument (String)
    const [userInput, setUserInput] = useState('');
    // Index of item that is selected by user (Number)
    const [activeSuggestions, setActiveSuggestions] = useState(0);
    // List of items from db that match filter ---
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    // Boolean Value to show or display suggestions ---
    const [showSuggestions, setSuggestions] = useState(false);
    //test
    const [selectedSuggestion, setSelectedSuggestion] = useState({});

    const handleSubmit = (event) => {
      event.preventDefault();
      // alert("Submit event triggered");
      console.log("Submit event triggered search-bar");
      console.log(selectedSuggestion);
      if(selectedSuggestion){
        // console.log(selectedSuggestion.id);
        window.id = selectedSuggestion.id;
        // tellOtherComponents(userInput); //Comment Back in to test Other component send req
      }
      console.log(window.id);
    };

    const onChange = e => {
      //set state to currently typed input
      const userInput = e.currentTarget.value;
      
      // Filter out suggestions that don't contain the user's input
      let filteredSuggestions1 = suggestions.filter(
        suggestion =>
          suggestion.product_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      //limit the size of the suggestion list
      if(filteredSuggestions1.length > 13){
        // console.log("heheh"); 
        filteredSuggestions1 = filteredSuggestions1.slice(0, 14);
      }
      // console.log("yolo", filteredSuggestions1);
      //initialize index
      setActiveSuggestions(0);
      //filter as it changes
      setFilteredSuggestions(filteredSuggestions1);
      //show suggestions
      setSuggestions(true);
      //set input text 
      setUserInput(e.currentTarget.value);
    };


  const onClick = e => {
    // reset search index
    setActiveSuggestions(0);
    //suggestion list reset
    setFilteredSuggestions([]);
    //drop down no longer showing
    setSuggestions(false);
    //user input set to clicked on suggestion
    setUserInput(e.currentTarget.innerText);
    //stored last search
    setSelectedSuggestion(filteredSuggestions[activeSuggestions]);
    //trigger form submission
    handleSubmit(e);
  };

  const onKeyDown = e => {
    
    if (e.keyCode === 13) {   //Enter key
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
        return;
      }
      setActiveSuggestions(activeSuggestions -1);
    }
    else if (e.keyCode === 40) { //down arrow
      // key holding key to slect suggestions
      if (activeSuggestions - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestions(activeSuggestions + 1);
    }
  };

  const handleClear = () => {
    //reset state
    setUserInput('');
    setSelectedSuggestion({});
  };

  let suggestionsListComponent;
  let clearInputButton;

  //If userinpit is not empty
  if(userInput){
    clearInputButton = (
      <button 
        onClick={ handleClear }
        className="x-button"
      ><ClearIcon/></button>
    );
  }

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) { 
      suggestionsListComponent = (
        <div className="suggestions-dropdown">
          <div className="left-suggestion-container">
          { filteredSuggestions.map((suggestion, index) => {
            let className = 'suggestion ';
            //conditional styling
            if (index === activeSuggestions) {
              className += "suggestion-active";
            }
            return (
              <div
                className={ className }
                key={ suggestion.id }
                onClick={ onClick }
              >
                { suggestion.product_name }
              </div>
            );
          })}
          </div>
          <div className="right-suggestion-container">
            <div className="dd-img-containers">
              <div>
                <img className="dd-img" src={ filteredSuggestions[activeSuggestions].thumbnailImage }/>
                <p className="dd-name">{ filteredSuggestions[activeSuggestions].product_name }</p>
                <p> { filteredSuggestions[activeSuggestions].regularPrice } </p>
                <Starts product={ filteredSuggestions[activeSuggestions] }/>
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
            onKeyDown={ onKeyDown }
            onChange={ onChange }
            className="search-input"
          />
          { clearInputButton }
          <button
          className="header-search-button"
          ><SearchIcon/></button>
        </form>
        { suggestionsListComponent }
      </div>
    );
};

export default SearchBar;

