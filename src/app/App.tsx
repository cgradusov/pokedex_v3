import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BottomNav from 'features/BottomNav/BottomNav';
import About from 'pages/about/About';
import logo from './logo.svg';

const Container = styled(HashRouter)`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Link = styled.a`
  color: #61dafb;
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
  & {
    animation: ${logoSpin} infinite 20s linear;
  }
}
`;

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <div>
            <Header>
              <Logo src={logo} alt="logo" />
              <p>
                Edit
                {' '}
                <Code>src/App.tsx</Code>
                {' '}
                and save to reload.
              </p>
              <Link
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </Link>
            </Header>
          </div>
        </Route>
        <Route path="/fav">
          <h1>Favourites</h1>
        </Route>
        <Route path="/about" component={About} />
      </Switch>
      <BottomNav />
    </Container>
  );
}

export default App;
