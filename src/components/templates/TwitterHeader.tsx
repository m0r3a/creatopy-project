import React from 'react';
import Header from './Header';
import AddContainer from './AdContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div>
      <Header name="Twitter Header (1500x500)"/>
      <AddContainer heightProp={"200px"} widthProp={"600px"}/>
    </div>
  );
};

export default InstagramPost;
