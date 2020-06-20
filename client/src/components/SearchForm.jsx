import React, { useState, useEffect }from 'react';

import Suggestions from './Suggestions.jsx';

const SearchBar = ({ suggestions }) => {

    const [userInput, setUserInput] = useState('');
    const [activeSuggestions, setActiveSuggestions] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setSuggestions] = useState(false);
    
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
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestions(0);
      setSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestions]);
    }
    else if (e.keyCode === 38) {
      if (activeSuggestions === 0) {
        return;
      }
      setActiveSuggestions(activeSuggestions -1);
    }
    else if (e.keyCode === 40) {
      if (activeSuggestions - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestions(activeSuggestions + 1);
    }
  };

  let suggestionsListComponent;
  let clearInputButton;

  if (showSuggestions && userInput) {
    clearInputButton = (
      <button 
        onClick={() => setUserInput('')}
        className="x-button"
      >X</button>
    );
    if (filteredSuggestions.length) { 
      suggestionsListComponent = (
        <ul className="suggestions-dropdown">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestions) {
              className = "suggestion-active";
            }
            console.log('www', suggestion);
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
          <em>There is nothing on the store matching your search, plase try something else.</em>
        </div>
      );
    }
  }

    return(
      <div className="search-container">
        <form className="search-from">
          <input
            placeholder="Search Best Buy"
            type="text" 
            value={userInput} 
            onChange={(e) => onChange(e)}
            className='search-bar'
          />
          {/*component*/}
          {clearInputButton}
          <button
          className="search-button"
          >Search</button>
        </form>
        {suggestionsListComponent}
      </div>
    );
};

export default SearchBar;

