import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';

import pl from 'prefetched/pokemonsList';

import BottomNav from 'features/BottomNav/BottomNav';
import About from 'pages/about/About';
import Main from 'pages/main/Main';
import { Pokemon } from 'entities/types';

type PokemonList = {
  [key: string]: Pokemon
}

const pokemonsList = pl as PokemonList;
const values = Object.values(pokemonsList);

const Container = styled(HashRouter)`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Route exact path="/">
        <Main
          values={values}
          isFavouritesPage={false}
        />
      </Route>
      <Route path="/fav">
        <Main
          values={values}
          isFavouritesPage
        />
      </Route>
      <Route path="/about" component={About} />
      <BottomNav />
    </Container>
  );
}

export default App;
