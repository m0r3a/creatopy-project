import React, { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';
import './Styles/AddContainer.css';
import AddManager from './AddManager';
import openAi from 'openai';

const openai = new openAi({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});


interface AddContainerProps {
  heightProp: string;
  widthProp: string;
}

const AddContainer: React.FC<AddContainerProps> = ({ heightProp, widthProp }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>('Title');
  const [description, setDescription] = useState<string>('Short description');
  const [cta, setCta] = useState<string>('Call to Action button');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqo_V7sqPhLLvsU4Q-z1E52dYR6clW06TsrrkjE6wGeVn_oSeff0yK4nEOcBQGLFmbSk&usqp=CAU');

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
        // Construct the image URL with query parameters
        const imageUrlWithParams = `${generatedImageUrl}`;
  
        // Set the window content to a div with the image and overlay text
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

  const handleApplyTittle = (newTitle: string) => {
    setTitle(newTitle);
  }

  const handleApplyDesc = (newDesc: string) => {
    setDescription(newDesc);
  }

  const handleApplyCta = (newCta: string) => {
    setCta(newCta);
  }
  
  return (
    <div className="add-container">
      <div className="first-elem">
        <div
          className="image-container"
          style={{
            height: heightProp,
            width: widthProp,
            backgroundImage: `url(${generatedImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          ref={imageContainerRef}
        >
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={handleOpenImageInNewTab}>{cta}</button>
        </div>
        <button className="button-27" onClick={handleDownloadClick} role="button">
          <span className="text">Download</span>
        </button>
      </div>
      <AddManager
        generateValues={handleChangeGeneration}
        changeTitle={handleApplyTittle}
        changeDesc={handleApplyDesc}
        changeCta={handleApplyCta}
      />
    </div>
  );
};

export default AddContainer;
