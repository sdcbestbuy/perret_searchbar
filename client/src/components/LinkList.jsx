import React from 'react';
import Link from './Link.jsx';

const LinkList = ({ links }) => {
  return(
    <ul>
      {links.map((link, i) => {
        return <Link 
          key={i} 
          link={link}
          className="link"
        />
      })}
    </ul>
  );
};

export default LinkList;