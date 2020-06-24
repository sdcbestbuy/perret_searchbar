import React from 'react';
import Link from './Link.jsx';

const LinkList = ({ links }) => {
  return(
    <nav className="top-nav-items">
      <ul className="link-list">
        {links.map((link, i) => {
            return <Link 
            key={i} 
            link={link}
            />
        })}
      </ul>
    </nav>
  );
};

export default LinkList;