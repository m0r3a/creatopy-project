import React from 'react';
import './Styles/App.css';
import Banner from './Banner';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="slider-thumb app">
      <h1>Add AI Generation</h1>
      <div className='banners'>
        <Banner name='Instagram Post' size='500x500px'/>
        <Banner name='Twitter Header' size='1500x500px'/>
        <Banner name='Instagram Story' size='1080x1920px'/>
      </div>
    </div>
  );
}

export default App;
