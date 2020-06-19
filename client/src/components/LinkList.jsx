import React from 'react';
import Link from './Link.jsx';

const LinkList = ({ links }) => {
  return(
    <div className="link-container">
      <ul className="link-list">
        {links.map((link, i) => {
            return <Link 
            key={i} 
            link={link}
            />
        })}
      </ul>
    </div>
  );
};

export default LinkList;