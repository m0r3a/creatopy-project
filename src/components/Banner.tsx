import React, { FC } from 'react';
import './Styles/Banner.css';

interface BannerProps {
  name: string;
  size: string;
}

const Banner: FC<BannerProps> = (props) => {
  return (
    <div className="banner">
      <h1>{props.name}</h1>
      <p>{props.size}</p>
    </div>
  );
};

export default Banner;
