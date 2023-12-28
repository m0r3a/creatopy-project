import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import InstagramPost from './InstagramPost';
import TwitterHeader from './TwitterHeader';
import InstagramStory from './InstagramStory';
import Banners from './Banners';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banners />}  />
        <Route path="/instagram-post" element={<InstagramPost />} />
        <Route path="/twitter-header" element={<TwitterHeader />} />
        <Route path="/instagram-story" element={<InstagramStory />} />
      </Routes>
    </Router>
  );
};


export default App;
