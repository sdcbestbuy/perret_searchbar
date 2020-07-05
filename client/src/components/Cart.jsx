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
               <p className="close-btn-text">+</p>
              </button>
            </div>
          </div>
          <div className="shoopping-cart-card">
            
          </div>
        </div>
      </div>
    );
};

export default Cart;
