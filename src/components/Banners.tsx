import React from 'react';
import './Styles/App.css';
import Banner from './Banner';

const Banners: React.FC = () => {
    return (
      <div className="slider-thumb app">
        <h1>Add AI Generator</h1>
        <div className='banners'>
          <Banner name='Instagram Post' size='500x500px' to='/instagram-post' />
          <Banner name='Twitter Header' size='1500x500px' to='/twitter-header' />
          <Banner name='Instagram Story' size='1080x1920px' to='/instagram-story' />
        </div>
        <footer>
          &copy; 2024 Buret Danila
        </footer>
      </div>
    );
  };

  export default Banners;