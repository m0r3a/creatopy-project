import React from 'react';
import './Styles/EditMenu.css';
import Header from './Header';
import AddContainer from './AddContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div className="">
      <Header name="Twitter Header (1500x500)"/>
      <AddContainer heightProp={"200px"} widthProp={"600px"}/>
    </div>
  );
};

export default InstagramPost;
