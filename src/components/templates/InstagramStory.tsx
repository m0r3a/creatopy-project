import React from 'react';
import './Styles/EditMenu.css';
import Header from './Header';
import AddContainer from './AddContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div className="">
      <Header name="Instagram Story (270x480)"/>
      <AddContainer heightProp={"480px"} widthProp={"270px"}/>
    </div>
  );
};

export default InstagramPost;