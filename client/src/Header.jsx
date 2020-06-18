import React, { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';
import ProductList from './components/ProductList.jsx';
import { productsData, linksData, iconsData } from './dummy-data.js';
import LinkList from './components/LinkList.jsx';
import LogoContainer from './components/LogoContainer.jsx';
import Icons from './components/Icons.jsx';

const Header = () => {
  const [products] = useState(productsData);
  const [links] = useState(linksData);
  const [icons] = useState(iconsData);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(products);
  return(
    <div className="header">
      <LogoContainer/>
      <div className='right-container'>  
        <LinkList 
          links={links}
          className="link-list"
        />
        <SearchForm 
          onChange={() => console.log('hi')}
          className="search-form"
        />
        <Icons 
          icons={icons}
        />
      </div>
      
      {/* Only want to show thos when input is onfocus */}
      {/* {<ProductList products={products}/>} */}
    </div>
  );
};

export default Header;



{/* <div className='bottom-container'>
        <ul>
          <span className="left-section">
            <li>Products</li>
            <li>Brands</li>
            <li>Deals</li>
            <li>Services</li>
          </span>
          <span className="right-section">
           <li>Account</li>
           <li>Recently viewed</li>
           <li>Order Status</li>
           <li>Saved Items</li>
          </span>
        </ul>
      </div> */}