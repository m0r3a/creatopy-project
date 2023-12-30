import React from 'react';
import './Styles/Header.css';

interface HeaderProps {
  name: string
}

const Header: React.FC<HeaderProps> = ({name}) => {
  
  return (
    <div className="header">
      AI Ad Generator 
      <div className='name'>{name}</div>
    </div>
  );
};

export default Header;
