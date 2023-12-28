import React, { useState } from 'react';
import './Styles/AddManager.css';

const AddManager: React.FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleGenerateClick = () => {
    // Handle logic for the "Generate" button
    // You can implement the logic to generate content here
  };

  const handleRegenerateClick = () => {
    // Handle logic for the "Regenerate" button
    // You can implement the logic to regenerate content here
  };

  const handleApplyClick = () => {
    // Handle logic for the "Apply" button
    // You can implement the logic to apply content here
  };

  return (
    <div className="add-manager">
      <div className="row first">
        <h4>Enter desired product name:</h4>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
      <div className="row second">
      <h4>Change the title</h4>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button onClick={handleRegenerateClick}>Regenerate</button>
        <button onClick={handleApplyClick}>Apply</button>
      </div>
      <div className="row third">
      <h4>Change the description</h4>
        <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <button onClick={handleRegenerateClick}>Regenerate</button>
        <button onClick={handleApplyClick}>Apply</button>
      </div>
      <div className="row fourth">
      <h4>Change the CLA button</h4>
        <input
          type="text"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
        <button onClick={handleRegenerateClick}>Regenerate</button>
        <button onClick={handleApplyClick}>Apply</button>
      </div>
    </div>
  );
};

export default AddManager;
