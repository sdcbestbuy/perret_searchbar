import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm.jsx';
import { linksData } from './dummy-data.js';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';
import Icons from './components/Icons.jsx';
import Axios from 'axios';

import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const Header = () => {
  const [products, setProducts] = useState([]);
  //TECH DEBT HERE FIX LATER
  const [productsUpdated, setProductsUpdated] = useState(false); 
  const [links] = useState(linksData);
  
  //TECH DEBT HERE FIX LATER
  useEffect(() => {
    getAllProducts();
  }, [productsUpdated]);

  const getAllProducts = () => {
    Axios.get('/api/get/products')
    .then((result) => {
      let allProducts = result.data;
      // console.log(allProducts);
      setProducts(allProducts);
    })
    .catch((err) => {
      console.log("error in client ", err);
    });
  };

  return(
    <div className="header-large">
      <div className="top-navigation-section">
        <div className="top-navigation-container">
          <LogoContainer/>
          <div className="right-container">
            <LinkList links={links}/>
            {/*<div className="top-nav-items"></div>*/}
            <div className="middle-container">
              <SearchForm suggestions={products}/>
              <div className="middle-right">
                <Icons/>
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
    </div>
  );
};

export default Header;