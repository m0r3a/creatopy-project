import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banners from './Banners';
import InstagramPost from './templates/InstagramPost';
import TwitterHeader from './templates/TwitterHeader';
import InstagramStory from './templates/InstagramStory';
import GlobalStyle from './styled-components-main/StyledComponents';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Banners />} />
        <Route path="/instagram-post" element={<InstagramPost />} />
        <Route path="/twitter-header" element={<TwitterHeader />} />
        <Route path="/instagram-story" element={<InstagramStory />} />
      </Routes>
    </Router>
  );
};

export default App;
