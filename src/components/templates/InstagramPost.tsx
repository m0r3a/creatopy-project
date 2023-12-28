import React from 'react';
import './Styles/InstagramPost.css';
import Header from './Header';
import AddContainer from './AddContainer';

const InstagramPost: React.FC = () => {
  
  return (
    <div className="">
      <Header name="Instagram Post (500x500px)"/>
      <AddContainer heightProp={"500px"} widthProp={"500px"}/>
    </div>
  );
};

export default InstagramPost;
