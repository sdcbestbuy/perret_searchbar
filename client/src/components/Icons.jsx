import React from 'react';
import Icon from './Icon.jsx';

const Icons = ({ icons }) => {
  return(
    <ul>
      {icons.map((icon) => {
        return <Icon icon={icon}/>
      })}
    </ul>
  );
};

export default Icons;