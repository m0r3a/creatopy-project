import React from 'react';
import Banner from './Banner';
import styled, { keyframes } from "styled-components"

const AppTitle = styled.h1`
  margin-top: 3%;
  font-size: 3rem;
`

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
`

const BannersTemplate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center; 
  color:White; 
`
const sliderShape = keyframes`
  0%,100%{
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    34%{
        border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
      transform:  translate3d(0,5px,0) rotateZ(0.01deg);
    }
    50%{
      transform: translate3d(0,0,0) rotateZ(0.01deg);
    }
    67%{
      border-radius: 100% 60% 60% 100% / 100% 100% 60% 60% ;
      transform: translate3d(0,-3px,0) rotateZ(0.01deg);
    }
`

const AppBanners = styled.div`
  display: flex;
  flex-direction: column;    
  align-items: center; 
  justify-content: center; 

  
 &:before {
    position: absolute;
    content: "";
    width: 450px;
    top: 25%;
    height: 450px;
    background: #141c1d;
    border-radius: 62% 47% 82% 35% / 45% 45% 80% 66%;
    will-change: border-radius, transform, opacity;
    animation: sliderShape 5s linear infinite;
    display: block;
    z-index: -1;
    -webkit-animation: ${sliderShape} 5s linear infinite;
  }
`

const Banners: React.FC = () => {
    return (
      <AppBanners>
        <AppTitle>Ai Ad Generator</AppTitle>
        <BannersTemplate>
          <Banner name='Instagram Post' size='500x500px' to='/instagram-post' />
          <Banner name='Twitter Header' size='1500x500px' to='/twitter-header' />
          <Banner name='Instagram Story' size='1080x1920px' to='/instagram-story' />
        </BannersTemplate>
        <Footer>&copy; 2024 Buret Danila</Footer>
      </AppBanners>
    );
  };

  export default Banners;