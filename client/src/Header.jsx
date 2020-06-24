import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm.jsx';
import { linksData } from './dummy-data.js';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';
import Icons from './components/Icons.jsx';
import Axios from 'axios';

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
      console.log(allProducts);
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
         <div className="global-navigation"></div>
         <div className="global-navigation"></div>
        </div> 
      </div>
    </div>
  );
};

export default Header;