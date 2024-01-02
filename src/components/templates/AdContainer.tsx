import React, { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';
import styled from 'styled-components';
import AdManager from './AdManager';
import openAi from 'openai';

const openai = new openAi({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

interface AddContainerProps {
  heightProp: string;
  widthProp: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  height: 90vh;
  position: relative;
  top: 2.5vh;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div<{ imageUrl: string, height: string, width: string }>`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;

  h2 {
    position: relative;
    top: 10%;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    text-align: center;
  }

  p {
    position: relative;
    top: -15%;
    margin: 0 15px;
    text-align: center;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  }

  button {
    position: relative;
    bottom: 10%;
    background: transparent;
    min-width: 60px;
    max-width: calc(100% - 100px);
    height: 50px;
    padding: 0 20px;
    border: 1px solid white;
    box-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  }
`;

const DownloadButton = styled.button`
  position: relative;
  top: 5%;
  padding: 16px;
  background: linear-gradient(0deg, #fcfcfc 0%, #f5f5f5 100%);
  border: 6px solid transparent;
  border-radius: 16px;
  background-clip: padding-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.5), 1px 3px 3px 2px #fff,
    0 0 0 6px #ECECEC;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1;
  transition: border 0.1s ease-in-out, padding 0.1s ease-in-out, margin 0.1s ease-in-out;

  &:after {
    position: absolute;
    top: -6px;
    bottom: -6px;
    left: -6px;
    right: -6px;
    background: linear-gradient(#fff, #ededed);
    content: "";
    z-index: -1;
    border-radius: 16px;
  }

  &:hover {
    border: 2px solid transparent;
    background-image: linear-gradient(180deg, #E6E6E6 0%, #F7F7F7 100%);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.35), 0 0 0 6px #ECECEC;
    padding: 20px;
  }

  &:active {
    border-top: 1px solid transparent;
  }
`;

const AddContainer: React.FC<AddContainerProps> = ({ heightProp, widthProp }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>('Title');
  const [description, setDescription] = useState<string>('Short description');
  const [cta, setCta] = useState<string>('Call to Action button');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqo_V7sqPhLLvsU4Q-z1E52dYR6clW06TsrrkjE6wGeVn_oSeff0yK4nEOcBQGLFmbSk&usqp=CAU'
  );

  const handleChangeGeneration = async (title: string, description: string, cta: string) => {
    setTitle(title);
    setDescription(description);
    setCta(cta);

    try {
      const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: title,
        n: 1,
        size: "512x512",
      });

      const imageUrl = response.data[0]?.url;

      if (imageUrl) {
        console.log(imageUrl);
        console.log(process.env.REACT_APP_OPENAI_API_KEY);
        setGeneratedImageUrl(imageUrl);
      } else {
        console.error('Error generating image: Unexpected response structure');
      }
    } catch (error) {
      console.error('Error generating image:', (error as Error).message);
    }
  };

  const handleDownloadClick = async () => {
    if (imageContainerRef.current) {
      const dataUrl = await domtoimage.toPng(imageContainerRef.current);

      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'image.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleOpenImageInNewTab = () => {
    if (generatedImageUrl) {
      const imageTab = window.open('', '_blank');
      if (imageTab) {
        const imageUrlWithParams = `${generatedImageUrl}`;

        imageTab.document.body.innerHTML = `
          <div style="position: relative; width: ${widthProp}; height: ${heightProp}; margin: 0 auto; text-align: center; overflow: hidden;">
            <img src="${imageUrlWithParams}" alt="Generated Image" style="width: 100%; height: 100%; object-fit: cover;"/>
            <h2 style="position: absolute; top: 5%; left: 50%; transform: translateX(-50%); color: white; width: 100%; text-align: center; text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;">${title}</h2>
            <p style="position: absolute; top: 25%; left: 50%; transform: translate(-50%, -50%); color: white; width: 100%; text-align: center; text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;">${description}</p>
            <button style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; background: transparent; min-width: 60px; max-width: calc(100% - 100px); height: 50px; padding: 0 20px; border: 1px solid white; text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black; box-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;">${cta}</button>
          </div>
        `;
      }
    }
  };

  const handleApplyTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleApplyDesc = (newDesc: string) => {
    setDescription(newDesc);
  };

  const handleApplyCta = (newCta: string) => {
    setCta(newCta);
  };

  return (
    <Container>
      <Element>
        <ImageContainer
          height={heightProp}
          width={widthProp}
          imageUrl={generatedImageUrl}
          ref={imageContainerRef}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={handleOpenImageInNewTab}>{cta}</button>
        </ImageContainer>
        <DownloadButton onClick={handleDownloadClick} role="button">
          <span className="text">Download</span>
        </DownloadButton>
      </Element>
      <AdManager
        generateValues={handleChangeGeneration}
        changeTitle={handleApplyTitle}
        changeDesc={handleApplyDesc}
        changeCta={handleApplyCta}
      />
    </Container>
  );
};

export default AddContainer;