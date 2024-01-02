import React from 'react';
import { HeaderComponent, NameSize } from './styled-components-templates/StyledComponents';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <HeaderComponent>
      AI Ad Generator
      <NameSize>{name}</NameSize>
    </HeaderComponent>
  );
};

export default Header;
