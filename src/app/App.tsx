import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const App = () => (
  <Container>
    <h1>Hello World!</h1>
  </Container>
);

export default App;
