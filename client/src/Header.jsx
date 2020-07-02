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
             <li className="gb-list-item"><a className="gb-list-btn">Products<ExpandMoreOutlinedIcon/></a></li>
             <li className="gb-list-item"><a className="gb-list-btn">Brands<ExpandMoreOutlinedIcon/></a></li>
             <li className="gb-list-item"><a className="gb-list-btn">Deals<ExpandMoreOutlinedIcon/></a></li>
             <li className="gb-list-item"><a className="gb-list-btn">Services <ExpandMoreOutlinedIcon/></a></li>
           </ul>
         </nav>
         <div className="utility-navigation-container">
           <nav className="utility-navigation">
             <ul className="utility-nav-list">
               <li className="util-list-item"><a className="util-list-btn"><AccountCircleOutlinedIcon/>Account<ExpandMoreOutlinedIcon/></a></li>
               <li className="util-list-item"><a className="util-list-btn">Recently Viewed<ExpandMoreOutlinedIcon/></a></li>
               <li className="util-list-item"><a className="util-list-btn">Order Status<ExpandMoreOutlinedIcon/></a></li>
               <li className="util-list-item"><a className="util-list-btn">Saved Items</a></li>
             </ul>
           </nav>
         </div>
        </div> 
      </div>
    </div>
  );
};

export default Header;