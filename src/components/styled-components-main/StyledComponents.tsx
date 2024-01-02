import styled, { keyframes, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: linear-gradient(90deg, #00FFC6, #30AADD);
    font-family: 'Helvetica Neue', Helvetica, sans-serif;
    color: white;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

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

export default GlobalStyle;
export  {AppTitle, AppBanners, Footer, BannersTemplate, BannerContainer, BannerSize, BannerTittle};