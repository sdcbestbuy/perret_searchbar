import React, { useState } from 'react';

const Cart = ({ handleClose }) => {
    return (
      <div className="overlay">
        <div className="shopping-cart-container">
          <div className="cart-header">
            <div className="inner-left-cart-header">
             <p>Your Shopping cart</p>
            </div>
            <div className="inner-rigth-cart-header">
              <button
                onClick={ handleClose }
                className="close-btn"
              >
               +
              </button>
            </div>
          </div>
          <div className="shoopping-cart-card">
            <img 
              src="https://thumbs.gfycat.com/RepulsiveScarceCranefly-size_restricted.gif"
              className="easter-egg"
            />
          </div>
        </div>
      </div>
    );
};

export default Cart;
