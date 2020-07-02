import React from 'react';

import Rating from '@material-ui/lab/Rating';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

const Stars = ({ product }) => {
    return(
    <ul className="review">
      <li className="liReviews">
        <div className="liDiv">
          <i className="stars">
            <Rating name="half-rating-read" 
              value={ product.customer_review_AVG }
              precision={0.1} 
              size="small"
              emptyIcon={ <GradeOutlinedIcon fontSize="inherit" /> }
              readOnly 
            />
            </i>
        <span className="totalReviews">{ `reviews (${ product.customerReviewCount })` }</span>
        </div>
    </li>
    </ul>
  );
};

export default Stars;
