import React from 'react';
import Icon from './Icon.jsx';

const Icons = ({ icons }) => {
  return(
    <div className='icons'>
        <ul>
        {icons.map((icon, i) => {
            return <Icon key={i} icon={icon}/>
        })}
        </ul>
    </div>
  );
};

export default Icons;