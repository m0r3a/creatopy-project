import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  height: 90vh;
  position: relative;
  top: 2.5vh;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div<{ imageUrl: string, height: string, width: string }>`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  h2 {
    position: relative;
    top: 10%;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    text-align: center;
  }

  p {
    position: relative;
    top: -15%;
    margin: 0 15px;
    text-align: center;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  }

  button {
    position: relative;
    bottom: 10%;
    background: transparent;
    min-width: 60px;
    max-width: calc(100% - 100px);
    height: 50px;
    padding: 0 20px;
    border: 1px solid white;
    box-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  }
`;

const DownloadButton = styled.button`
  position: relative;
  top: 5%;
  padding: 16px;
  background: linear-gradient(0deg, #fcfcfc 0%, #f5f5f5 100%);
  border: 6px solid transparent;
  border-radius: 16px;
  background-clip: padding-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.5), 1px 3px 3px 2px #fff,
    0 0 0 6px #ECECEC;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1;
  transition: border 0.1s ease-in-out, padding 0.1s ease-in-out, margin 0.1s ease-in-out;

  &:after {
    position: absolute;
    top: -6px;
    bottom: -6px;
    left: -6px;
    right: -6px;
    background: linear-gradient(#fff, #ededed);
    content: "";
    z-index: -1;
    border-radius: 16px;
  }

  &:hover {
    border: 2px solid transparent;
    background-image: linear-gradient(180deg, #E6E6E6 0%, #F7F7F7 100%);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.35), 0 0 0 6px #ECECEC;
    padding: 20px;
  }

  &:active {
    border-top: 1px solid transparent;
  }
`;

const StyledAdManager = styled.div`
  background: transparent;
  margin-right: 20px;
  background-color: rgba(3, 95, 78, 0.31);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledRow = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h4`
  background-color: white;
  color: black;
  position: relative;
  margin-top: 0;
  height: 40px;
  width: 98.5%;
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  width: 500px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #00ff95;
    box-shadow: 0 0 5px rgba(0, 157, 229, 0.5);
  }

  &:not(:placeholder-shown) {
    background-color: #f8f8f8;
  }
`;

const StyledButton = styled.button`
  width: max-content;
  height: 35px;
  touch-action: manipulation;
  -webkit-appearance: none;
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: transparent;
  padding: 0;
  margin: 5px;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit;
  border-style: solid;
  border-width: 0;
  box-sizing: border-box;

  border: 1px solid #2b2b2b;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: #ffffff;
  background-image: radial-gradient(75% 25% at 50% 95%, rgba(255, 255, 255, 0.2), transparent);
  color: #000000;
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.2), 0 1px 4px 1px rgba(0, 0, 0, 0.1);
  transition-property: border-color, transform, background-color;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
  cursor: pointer;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
  }

  @media (hover: hover) {
    &:hover {
      border-color: #000000;
      transform: scale(1.04);
      background-color: #ffffff;
    }
  }

  &:focus-visible {
    border-color: #000000;
    transform: scale(1.04);
    background-color: #ffffff;
    text-decoration-line: underline;
    text-decoration-thickness: 0.0625em;
    text-underline-offset: 0.125em;
  }

  &:active {
    border-color: #000000;
    transform: scale(0.96);
    background-color: #ffffff;
  }
`;

const HeaderComponent = styled.div`
  background-color: white;
  width: calc(100% - 10px); /* for padding 10px */
  height: 45px;
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NameSize = styled.div`
  position: absolute;
  right: 10px;
  font-size: 16px;
`;

export default Container;
export {Element, ImageContainer, DownloadButton, StyledButton, StyledInput, StyledHeader, StyledRow, StyledAdManager, HeaderComponent, NameSize};