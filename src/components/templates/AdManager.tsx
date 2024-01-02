import React, { useState } from 'react';
import styled from 'styled-components';
import openAi from 'openai';

const openai = new openAi({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const StyledAdManager = styled.div`
  background: transparent;
  margin-right: 20px;
  background-color: rgba(3, 95, 78, 0.31);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledRow = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h4`
  background-color: white;
  color: black;
  position: relative;
  margin-top: 0;
  height: 40px;
  width: 98.5%;
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  width: 500px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #00ff95;
    box-shadow: 0 0 5px rgba(0, 157, 229, 0.5);
  }

  &:not(:placeholder-shown) {
    background-color: #f8f8f8;
  }
`;

const StyledButton = styled.button`
  width: max-content;
  height: 35px;
  touch-action: manipulation;
  -webkit-appearance: none;
  appearance: none;
  vertical-align: middle;
  color: inherit;
  font: inherit;
  background: transparent;
  padding: 0;
  margin: 5px;
  border-radius: 0;
  text-align: inherit;
  text-transform: inherit;
  border-style: solid;
  border-width: 0;
  box-sizing: border-box;

  border: 1px solid #2b2b2b;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: #ffffff;
  background-image: radial-gradient(75% 25% at 50% 95%, rgba(255, 255, 255, 0.2), transparent);
  color: #000000;
  box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.2), 0 1px 4px 1px rgba(0, 0, 0, 0.1);
  transition-property: border-color, transform, background-color;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
  cursor: pointer;

  &:focus {
    outline-style: solid;
    outline-color: transparent;
  }

  @media (hover: hover) {
    &:hover {
      border-color: #000000;
      transform: scale(1.04);
      background-color: #ffffff;
    }
  }

  &:focus-visible {
    border-color: #000000;
    transform: scale(1.04);
    background-color: #ffffff;
    text-decoration-line: underline;
    text-decoration-thickness: 0.0625em;
    text-underline-offset: 0.125em;
  }

  &:active {
    border-color: #000000;
    transform: scale(0.96);
    background-color: #ffffff;
  }
`;

interface AddManagerProps {
    generateValues: (title: string, description: string, cta: string) => void;
    changeTitle: (title: string) => void;
    changeDesc: (desc: string) => void;
    changeCta: (cta: string) => void;
}

const AdManager: React.FC<AddManagerProps> = ({generateValues, changeTitle, changeDesc, changeCta}) => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [input4, setInput4] = useState<string>('');

  const handleGenerateClick = async () => {
    let generatedTitle;
    let generatedDescription;
    let generatedCta;

    try {
      if (input1.trim() !== '') {
        const responseText = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `You will receive a word, i want either to keep it, or to modify it as it to be as an add title, for example if you receive ferrari, you either keep it ferrari or write FerrariHouse. This is the word: ${input1}` },
          ],
          temperature: 0.8,
          max_tokens: 50,
          top_p: 1,
        });

        if (
          responseText &&
          responseText.choices &&
          responseText.choices[0] &&
          responseText.choices[0].message &&
          responseText.choices[0].message.content
        ) {
          generatedTitle = responseText.choices[0].message.content.trim();
          setInput2(generatedTitle);
        } else {
          console.error('Error generating text title: Unexpected response structure');
        }
      }
    }catch (error) {
      console.error('Error generating title:', (error as Error).message);
    }

    try {
      if (input1.trim() !== '') {
        const responseText = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `You will receive a word, i want you to crate a short like an add description within 10 words related to the word. This is the word: ${input1}` },
          ],
          temperature: 0.8,
          max_tokens: 50,
          top_p: 1,
        });


        if (
          responseText &&
          responseText.choices &&
          responseText.choices[0] &&
          responseText.choices[0].message &&
          responseText.choices[0].message.content
        ) {
          generatedDescription = responseText.choices[0].message.content.trim();
          setInput3(generatedDescription);
        } else {
          console.error('Error generating text description: Unexpected response structure');
        }
      }
    }catch (error) {
      console.error('Error generating description:', (error as Error).message);
    }

    try {
      if (input1.trim() !== '') {
        const responseText = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `You will receive a word, Generate a Call to Action within 3 words related to the theme. This is the word: ${input1}` },
          ],
          temperature: 0.8,
          max_tokens: 50,
          top_p: 1,
        });

        if (
          responseText &&
          responseText.choices &&
          responseText.choices[0] &&
          responseText.choices[0].message &&
          responseText.choices[0].message.content
        ) {
          generatedCta = responseText.choices[0].message.content.trim();
          setInput4(generatedCta);
        } else {
          console.error('Error generating text cta: Unexpected response structure');
        }
      }
    }catch (error) {
      console.error('Error generating cta:', (error as Error).message);
    }

    generateValues(
      generatedTitle !== undefined ? generatedTitle : "Default Value",
      generatedDescription !== undefined ? generatedDescription : "Default Value",
      generatedCta !== undefined ? generatedCta : "Default Value"
      );
  };

  const handleRegenerateClick = async (field: string) => {
    let tempField;
    switch(field){
      case "title":
        try {
          if (input1.trim() !== '') {
            const responseText = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: `You will receive a word, i want either to keep it, or to modify it as it to be as an add title, for example if you receive ferrari, you either keep it ferrari or write FerrariHouse. This is the word: ${input1}` },
              ],
              temperature: 0.8,
              max_tokens: 50,
              top_p: 1,
            });
    
            if (
              responseText &&
              responseText.choices &&
              responseText.choices[0] &&
              responseText.choices[0].message &&
              responseText.choices[0].message.content
            ) {
              tempField = responseText.choices[0].message.content.trim();
              setInput2(tempField);
            } else {
              console.error('Error generating text title: Unexpected response structure');
            }
          }
        }catch (error) {
          console.error('Error generating title:', (error as Error).message);
        }
      break;

      case "description":
        try {
          if (input1.trim() !== '') {
            const responseText = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: `You will receive a word, i want you to crate a short like an add description within 10 words related to the word. This is the word: ${input1}` },
              ],
              temperature: 0.8,
              max_tokens: 50,
              top_p: 1,
            });
    
            if (
              responseText &&
              responseText.choices &&
              responseText.choices[0] &&
              responseText.choices[0].message &&
              responseText.choices[0].message.content
            ) {
              tempField = responseText.choices[0].message.content.trim();
              setInput3(tempField);
            } else {
              console.error('Error generating text description: Unexpected response structure');
            }
          }
        }catch (error) {
          console.error('Error generating description:', (error as Error).message);
        }
      break;

      case "cta":
        try {
          if (input1.trim() !== '') {
            const responseText = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: `You will receive a word, Generate a Call to Action within 3 words related to the theme. This is the word: ${input1}` },
              ],
              temperature: 0.8,
              max_tokens: 50,
              top_p: 1,
            });
    
            if (
              responseText &&
              responseText.choices &&
              responseText.choices[0] &&
              responseText.choices[0].message &&
              responseText.choices[0].message.content
            ) {
              tempField = responseText.choices[0].message.content.trim();
              setInput4(tempField);
            } else {
              console.error('Error generating text cta: Unexpected response structure');
            }
          }
        }catch (error) {
          console.error('Error generating cta:', (error as Error).message);
        }
      break;
    }
  };

  const handleApplyClick = (field: string) => {
    switch(field){
      case "title":
        changeTitle(input2);
      break;
      case "description":
        changeDesc(input3);
      break;
      case "cta":
        changeCta(input4);
      break;
    }
  };

  return (
    <StyledAdManager>
      <StyledRow>
        <StyledHeader>Enter desired product name:</StyledHeader>
        <StyledInput
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <StyledButton onClick={handleGenerateClick}>
          <span className="text">Generate</span>
        </StyledButton>
      </StyledRow>
      <StyledRow>
        <StyledHeader>Change the title</StyledHeader>
        <StyledInput
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <div>
          <StyledButton onClick={() => handleRegenerateClick('title')}>
            <span className="text">Regenerate</span>
          </StyledButton>
          <StyledButton onClick={() => handleApplyClick('title')}>
            <span className="text">Apply</span>
          </StyledButton>
        </div>
      </StyledRow>
      <StyledRow>
        <StyledHeader>Change the description</StyledHeader>
        <StyledInput
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <div>
          <StyledButton onClick={() => handleRegenerateClick('description')}>
            <span className="text">Regenerate</span>
          </StyledButton>
          <StyledButton onClick={() => handleApplyClick('description')}>
            <span className="text">Apply</span>
          </StyledButton>
        </div>
      </StyledRow>
      <StyledRow>
        <StyledHeader>Change the CLA button</StyledHeader>
        <StyledInput
          type="text"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
        />
        <div>
          <StyledButton onClick={() => handleRegenerateClick('cta')}>
            <span className="text">Regenerate</span>
          </StyledButton>
          <StyledButton onClick={() => handleApplyClick('cta')}>
            <span className="text">Apply</span>
          </StyledButton>
        </div>
      </StyledRow>
    </StyledAdManager>
  );
};

export default AdManager;