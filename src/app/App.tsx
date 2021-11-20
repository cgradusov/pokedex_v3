import React from 'react';
import styled from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';

import pl from 'prefetched/pokemonsList';
import { Stat } from 'utils/pokeStatsFormater';
import { PokeType } from 'shared/ui/badge/PokeBadge';

import BottomNav from 'features/BottomNav/BottomNav';
import About from 'pages/about/About';
import Main from 'pages/main/Main';

export type Pokemon = {
  id: number, name: string, height: number, weight: number,
  stats: Stat[],
  types: PokeType[],
  gender: number,
  desc: string,
  isInPokeball?: boolean;
}

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
        <Main values={values} isFavouritesPage={false} />
      </Route>
      <Route path="/fav">
        <Main values={values} isFavouritesPage />
      </Route>
      <Route path="/about" component={About} />
      <BottomNav />
    </Container>
  );
}

export default App;
