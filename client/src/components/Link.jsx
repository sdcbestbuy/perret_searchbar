import React from 'react';

const Link = ({ link }) => {
  return(
    <li className="link"><a href="#">{link.name}</a></li>
  );
};

export default Link;