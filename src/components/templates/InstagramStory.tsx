import React from 'react';
import Header from './Header';
import AddContainer from './AdContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div className="">
      <Header name="Instagram Story (1080x1920)"/>
      <AddContainer heightProp={"480px"} widthProp={"270px"}/>
    </div>
  );
};

export default InstagramPost;