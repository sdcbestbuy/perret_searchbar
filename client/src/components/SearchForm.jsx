import React, { useState, useEffect }from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Axios from 'axios';


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

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Submit event triggered");
      if(selectedSuggestion){
        // console.log(selectedSuggestion.id);
        window.id = selectedSuggestion.id;
        // tellOtherComponents(userInput); //Comment Back in to test Other component send req
      }
      console.log(window.id);
    };

    const onChange = e => {
      // const { suggestions } = this.props;
      const userInput = e.currentTarget.value;
      
      // Filter our suggestions that don't contain the user's input
      const filteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion.product_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      setActiveSuggestions(0);
      setFilteredSuggestions(filteredSuggestions);
      setSuggestions(true);
      setUserInput(e.currentTarget.value);
    };


  const onClick = e => {
    // Update the user input and reset the rest of state
    setActiveSuggestions(0);
    setFilteredSuggestions([]);
    setSuggestions(false);
    setUserInput(e.currentTarget.innerText);
    setSelectedSuggestion(filteredSuggestions[activeSuggestions]);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {   //Enter key
      //reset index
      setActiveSuggestions(0);
      setFilteredSuggestions([]);
      //stop showing dropdown
      setSuggestions(false);
      // set state for 
      setUserInput('chnage');
      //
      setSelectedSuggestion(filteredSuggestions[activeSuggestions]);
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
        onClick={handleClear}
        className="x-button"
      ><ClearIcon/></button>
    );
  }

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) { 
      suggestionsListComponent = (
        <ul className="suggestions-dropdown">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestions) {
              className = "suggestion-active";
            }
            // console.log('suggestion:', suggestion);
            return (
              <li
                className={className}
                key={suggestion.id}
                onClick={onClick}
              >
                {suggestion.product_name}
              </li>
            );
          })}
        </ul>
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
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            placeholder="Search Best Buy"
            type="text" 
            value={userInput}
            onKeyDown={onKeyDown}
            onChange={onChange}
            className="search-input"
          />
          {clearInputButton}
          <button
          className="header-search-button"
          ><SearchIcon/></button>
        </form>
        {suggestionsListComponent}
      </div>
    );
};

export default SearchBar;

