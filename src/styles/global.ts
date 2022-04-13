import { shade } from 'polished';
import styled, { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a1a1a1;
    }
   }

   body {
     background: #f0f5f5 url(${githubBackground}) no-repeat 70% top;
     -webkit-font-smoothing: antialised;

   }

   body, input, button
   {
     font: 16px Roboto, sans-serif;
   }

   button{
     cursor: pointer;
   }

`;

export const PageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 70px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  max-width: 900px;
  width: 80%;
  align-items: flex-start;
  margin-top: 50px;
`;

export const PageTitle = styled.h1`
  align-self: flex-start;
  max-width: 70%;

  @media(max-width: 400px) {
    max-width: 100%;
  }
`;

export const MoreResultsButton = styled.button`
  background-color: #ff3366;
  padding: 10px;
  border-radius: 6px;
  border: 0;
  color: #FFFFFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FF3366')};
  }
`;
