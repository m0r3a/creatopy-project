import React from 'react';
import { Link } from 'react-router-dom';
import { BannerContainer, BannerTittle, BannerSize } from './styled-components-main/StyledComponents';

interface BannerProps {
  name: string;
  size: string;
  to: string;
}

const Banner: React.FC<BannerProps> = ({ name, size, to }) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'white' }} to={to}>
      <BannerContainer>
        <BannerTittle>{name}</BannerTittle>
        <BannerSize>{size}</BannerSize>
      </BannerContainer>
    </Link>
  );
};

export default Banner;
