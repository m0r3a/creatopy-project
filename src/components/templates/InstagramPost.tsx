import React from 'react';
import Header from './Header';
import AdContainer from './AdContainer';

const InstagramPost: React.FC = () => {
  return (
    <>
      <Header name="Instagram Post (500x500px)" />
      <AdContainer heightProp="500px" widthProp="500px" />
    </>
  );
};

export default InstagramPost;
