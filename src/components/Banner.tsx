import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 300px;
  height: 500px;
  margin: 40px 20px 20px 0px;

  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  font-family: 'Arial', 'Helvetica', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 15px;
  border: 2px solid rgb(236, 236, 236);
  transition: background 1.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    background: linear-gradient(180deg, #00FFC6, #30AADD);
    color: black;
    transform: scale(1.1);
    border: none;

    h1 {
      font-size: 32px;
        margin-top: 3%;
    }

    h2 {
      margin-top: -1%;
      font-size: 24px;
    }
  }
`;

const BannerTittle = styled.h1`
  font-size: 24px;
`;

const BannerSize = styled.h2`
  font-size: 16px;
`;

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
