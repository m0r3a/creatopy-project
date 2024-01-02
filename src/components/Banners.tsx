import React from 'react';
import Banner from './Banner';
import { AppBanners, AppTitle, BannersTemplate, Footer } from './styled-components-main/StyledComponents';


const Banners: React.FC = () => {
    return (
      <AppBanners>
        <AppTitle>Ai Ad Generator</AppTitle>
        <BannersTemplate>
          <Banner name='Instagram Post' size='500x500px' to='/instagram-post' />
          <Banner name='Twitter Header' size='1500x500px' to='/twitter-header' />
          <Banner name='Instagram Story' size='1080x1920px' to='/instagram-story' />
        </BannersTemplate>
        <Footer>&copy; 2024 Buret Danila</Footer>
      </AppBanners>
    );
  };

  export default Banners;