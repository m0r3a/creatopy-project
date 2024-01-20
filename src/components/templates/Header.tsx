import React from 'react';
import { HeaderComponent, NameSize } from './styled-components-templates/StyledComponents';

type TheaderProps = {
  name: string;
};

const Header: React.FC<TheaderProps> = ({ name }) => {
  return (
    <HeaderComponent>
      AI Ad Generator
      <NameSize>{name}</NameSize>
    </HeaderComponent>
  );
};

export default Header;
