import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

if (process.env.NODE_ENV !== 'production') {
  console.log('App running in development mode!');
} else {
    console.log('App running in production mode!');
}

ReactDOM.render(<Header/>, document.getElementById("roots"));
