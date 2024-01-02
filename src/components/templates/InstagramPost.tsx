import React from 'react';
import Header from './Header';
import AddContainer from './AdContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div className="">
      <Header name="Instagram Post (500x500px)"/>
      <AddContainer heightProp={"500px"} widthProp={"500px"}/>
    </div>
  );
};

export default InstagramPost;
