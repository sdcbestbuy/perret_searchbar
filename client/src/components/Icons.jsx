import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Icons = () => {

  return(
    <div className="icon-container">
       <div className="store-icon">
         <svg width="30" height="31" viewBox="0 0 32 32" fill="#fff"><path d="M28.907 11.924h-3.785a.978.978 0 000 1.956h3.785c.139 0 .256.117.256.255v13.864a.26.26 0 01-.256.256h-5.025v-4.597c0-.837-.68-1.517-1.517-1.517h-9.727c-.822 0-1.442.652-1.442 1.517v4.597H6.237a.272.272 0 01-.269-.269V16.467l15.701-.001c.54 0 .978-.438.978-.978l-.001-12.645a.978.978 0 00-.978-.978H5.81a.98.98 0 00-.672.267L1.201 5.854a.979.979 0 00-.306.711l.002 5.103c0 .264.107.517.296.7L4.04 15.14c-.007.047-.027.09-.027.138v12.71c0 1.226.997 2.223 2.224 2.223h22.67c1.22 0 2.211-.991 2.211-2.21V14.134c0-1.22-.991-2.211-2.21-2.211zM2.851 6.986L6.2 3.82h14.492V14.51L6.2 14.511l-3.347-3.256v-4.27zm19.076 21.27h-3.48v-4.16h3.48v4.16zm-8.775-4.16h3.34v4.16h-3.34v-4.16zM6.382 9.057a.975.975 0 01-.978.978.98.98 0 01-.977-.978.98.98 0 01.977-.978c.543 0 .978.435.978.978z"></path></svg>
         <p>North Star</p>
       </div>
       <div className="cart-icon">
         <ShoppingCartOutlinedIcon/>
         <p>Cart</p>
       </div>
    </div>
  );
};

export default Icons;