//Libary imports
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//Data imports
import { linksData } from './dummy-data.js';

//Local components
import SearchForm from './components/SearchForm.jsx';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';
import Icons from './components/Icons.jsx';
import Cart from './components/Cart.jsx';

//Optional Icons
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {

  //All the prodcuts from the database
  const [ products, setProducts ] = useState([]);
  //Tells the use effect hook if it needs to change again
  const [ productsUpdated, setProductsUpdated] = useState(false);
  //The link names that get mapped on top-most navigation bar
  const [ links ] = useState(linksData);
  //Decides whether shopping cart is showing on page
  const [ isShoppingCartShowing, setShoppingCart ] = useState(false);
  
  //Similar to componentDidMount & componentWillUpdate
  useEffect(() => {
    //get all prodcuts from db
    getAllProducts();
  }, [productsUpdated]);

  const getAllProducts = () => {
    Axios.get('/api/get/products')
    .then((result) => {
      //Array of prodcuts from db
      const allProducts = result.data;
      //set state to incoming array
      setProducts(allProducts);
    })
    .catch((err) => {
      // show the error in client side console
      console.log("error in client ", err);
    });
  };


  const handleShoppingCartClick = () => {
    setShoppingCart(true);
  };


  const handleClose = () => {
    setShoppingCart(false);
  };

  let shoppingCart;

  //Show shoppingCart
  if(isShoppingCartShowing){
    shoppingCart = (
      <Cart handleClose={ handleClose }/>
    );
  }

  return(
    <div className="header-large">
      <div className="top-navigation-section">
        <div className="top-navigation-container">
          <LogoContainer/>
          <div className="right-container">
            <LinkList links={links}/>
            {/*<div className="top-nav-items"></div>*/}
            <div className="middle-container">
              <SearchForm suggestions={products} />
              <div className="middle-right">
                <Icons shoppingCartFunction={ handleShoppingCartClick }/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fullbleed-wrapper">
        <div className="bottom-div-content">
         <nav className="global-navigation">
           <ul className="global-nav-list">
             <li className="gb-list-item">
               <a className="gb-list-btn">
                <p className="btm-link-name">Products</p>
                {/* <ExpandMoreOutlinedIcon/> */}
               </a>
              </li>
             <li className="gb-list-item">
               <a className="gb-list-btn">
                 <p className="btm-link-name">Brands</p>
                 {/* <ExpandMoreOutlinedIcon/> */}
               </a>
             </li>
             <li className="gb-list-item">
               <a className="gb-list-btn">
                 <p className="btm-link-name">Deals</p>
                 {/* <ExpandMoreOutlinedIcon/> */}
               </a>
             </li>
             <li className="gb-list-item">
               <a className="gb-list-btn">
                 <p className="btm-link-name">Services</p>
                 {/* <ExpandMoreOutlinedIcon/> */}
              </a>
             </li>
           </ul>
         </nav>
         <div className="utility-navigation-container">
           <nav className="utility-navigation">
             <ul className="utility-nav-list">
               <li className="util-list-item">
                 <a className="util-list-btn">
                   {/* <AccountCircleOutlinedIcon className="acc-icon"/> */}
                   <p className="btm-link-name">Account</p>
                   {/* <ExpandMoreOutlinedIcon className="acc-icon"/> */}
                  </a>
               </li>
               <li className="util-list-item">
                <a className="util-list-btn">
                  <p className="btm-link-name">Recently Viewed</p>
                  {/* <ExpandMoreOutlinedIcon/> */}
                </a>
               </li>
               <li className="util-list-item">
                 <a className="util-list-btn">
                   <p className="btm-link-name">Order Status</p>
                   {/* <ExpandMoreOutlinedIcon/> */}
                  </a>
                </li>
               <li className="util-list-item">
                 <a className="util-list-btn">
                   <p className="btm-link-name">Saved Items</p>
                 </a>
               </li>
             </ul>
           </nav>
         </div>
        </div> 
      </div>
      { shoppingCart }
    </div>
  );
};

export default Header;