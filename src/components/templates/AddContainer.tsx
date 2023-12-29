import React, { useRef } from 'react';
import domtoimage from 'dom-to-image';
import './Styles/AddContainer.css';
import AddManager from './AddManager';

interface AddContainerProps {
  heightProp: string;
  widthProp: string;
}

const AddContainer: React.FC<AddContainerProps> = ({ heightProp, widthProp }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  return(
    <div className="add-container">
      <div className='first-elem'>
        <div className='image-container' style={{ height: heightProp, width: widthProp }} ref={imageContainerRef}>
          <h2>Title</h2>
          <p>Description</p>
          <button id='CLA-btn'>CTAs asdasdasd as</button>
        </div>
        <button className="button-27" onClick={handleDownloadClick} role="button">
          <span className="text">Download</span>
        </button>
      </div>
      <AddManager />
    </div>
  );
};

export default AddContainer;
