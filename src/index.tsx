import App from 'app/App';
import React from 'react';
import ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobasStyle = createGlobalStyle`
  html, body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

ReactDom.render(
  <React.StrictMode>
    <GlobasStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
