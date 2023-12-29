import React, { useRef, useState } from 'react';
import domtoimage from 'dom-to-image';
import './Styles/AddContainer.css';
import AddManager from './AddManager';
import openAi from 'openai';

const openai = new openAi({
  apiKey: "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",
  dangerouslyAllowBrowser: true
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
        size: "1024x1024",
      });

      const imageUrl = response.data[0]?.url;

      if (imageUrl) {
        console.log(imageUrl);
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
      console.log(imageContainerRef);
      console.log(imageContainerRef.current);
    }
  };

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
          <button>{cta}</button>
        </div>
        <button className="button-27" onClick={handleDownloadClick} role="button">
          <span className="text">Download</span>
        </button>
      </div>
      <AddManager
        title={title}
        description={description}
        cta={cta}
        generateValues={handleChangeGeneration}
      />
    </div>
  );
};

export default AddContainer;
