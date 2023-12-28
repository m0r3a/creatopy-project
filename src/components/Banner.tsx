// Banner.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Banner.css'

interface BannerProps {
  name: string;
  size: string;
  to: string; 
}

const Banner: React.FC<BannerProps> = ({ name, size, to }) => {
  return (
    <Link style={{textDecoration: 'none', color: 'white'}} to={to}>
      <div className="banner">
        <h1>{name}</h1>
        <h2>{size}</h2>
      </div>
    </Link>
  );
};

export default Banner;
