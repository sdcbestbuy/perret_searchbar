import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm.jsx';
import { productsData, linksData, iconsData } from './dummy-data.js';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';
import Icons from './components/Icons.jsx';
import Axios from 'axios';

const Header = () => {
  const [products, setProducts] = useState([]);
  //TECH DEBT HERE FIX LATER
  const [productsUpdated, setProductsUpdated] = useState(false); 
  const [links] = useState(linksData);
  const [icons] = useState(iconsData);
  
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
    <div className="header">
      <div className="top">
        {/* top-left-container */}
        <LogoContainer/>
        <div className='right-container'>
          {/* {<div className="link-container"></div>} */}
          <LinkList links={links}/>
          {/* {<div className="search-container"></div>} */}
          <SearchForm suggestions={products}/>
          {/*<div className="icon-list"></div>*/}
          <Icons icons={icons}/>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-div-content"></div> 
      </div>
    </div>
  );
};

export default Header;



{/* */}

{/* <SearchForm 
            onChange={() => console.log('hi')}
            className="search-form"
          /> */}
      
        //   <Icons 
        //   icons={icons}
        // />


        // <div >
        //   <ul>
        //     <span className="left-section">
        //       <li>Products</li>
        //       <li>Brands</li>
        //       <li>Deals</li>
        //       <li>Services</li>
        //     </span>
        //     <span className="right-section">
        //     <li>Account</li>
        //     <li>Recently viewed</li>
        //     <li>Order Status</li>
        //     <li>Saved Items</li>
        //     </span>
        //   </ul>
        // </div>