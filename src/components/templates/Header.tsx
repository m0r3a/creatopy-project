import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  name: string;
}

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

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <HeaderComponent>
      AI Ad Generator
      <NameSize>{name}</NameSize>
    </HeaderComponent>
  );
};

export default Header;
