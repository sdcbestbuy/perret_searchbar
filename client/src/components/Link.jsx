import React from 'react';

const Link = ({ link }) => {
  return(
    <li>
      <a className="link" href="#">
        {link.name}
      </a>
    </li>
  );
};

export default Link;