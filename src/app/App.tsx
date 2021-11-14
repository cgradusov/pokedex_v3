import React from 'react';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BottomNav from 'features/BottomNav/BottomNav';
import About from 'pages/about/About';
import Main from 'pages/main/Main';

const Container = styled(HashRouter)`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <Main />
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
