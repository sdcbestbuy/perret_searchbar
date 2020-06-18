import React, { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';
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
      <div className="top">
        {/* top-left-container */}
        <LogoContainer/>
        <div className='right-container'>
          <div className="link-container"></div>
          <div className="search-container"></div>
          <div className="icon-list"></div>  
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