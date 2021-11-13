import App from 'app/App';
import React from 'react';
import ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobasStyle = createGlobalStyle`
  html, body {
margin: 0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #474747;
  }
`;

ReactDom.render(
  <React.StrictMode>
    <GlobasStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
