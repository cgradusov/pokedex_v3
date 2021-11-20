import React, { useState, useEffect } from 'react';
import Search from 'features/Search/Search';
import styled from 'styled-components';

import PokePage from 'features/PokePage/PokePage';
import { Pokemon } from 'app/App';
import Feed from 'features/Feed/Feed';
import useLocalStorage from 'hooks/useLocalStorage';
import { formatNumber } from 'utils/stringUtils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 32px;
  min-height: calc(100vh - 64px);
`;

type MainProps = {
  values: Pokemon[],
  isFavouritesPage: boolean;
}

const Main: React.FC<MainProps> = ({ values, isFavouritesPage }) => {
  const [pokeballList, setPokeballList] = useLocalStorage<number[]>('pokeball', []);
  const [searchValue, setSearchValue] = useState<string>('');

  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(2);
  const [items, setItems] = useState<Pokemon[]>([]);
  const [isPageOpen, setPageOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(items[0]);
  const fetchData = () => {
    setNextPage((prevState) => prevState + 1);
    setItems(values.slice(0, 27 * nextPage));
  };

  useEffect(() => {
    if (items.length === 0) {
      setHasMore(false);
    }

    if (items.length === values.length) {
      setHasMore(false);
    }
  }, [items]);

  const pokeSearch = (search: string) => {
    if (!Number.isNaN(search) && !Number.isNaN(parseFloat(search))) {
      return (el: Pokemon) => formatNumber(el.id.toString()).includes(search);
    }

    return (el: Pokemon) => el.name.includes(search);
  };

  useEffect(() => {
    const searchedPokeList = searchValue !== '' ? values.filter(pokeSearch(searchValue)) : values;

    if (!isFavouritesPage) {
      setItems(searchedPokeList.slice(0, 27));
    } else {
      setItems(searchedPokeList.filter((p: Pokemon) => pokeballList.includes(p?.id)).slice(0, 27));
    }
  }, [values, isFavouritesPage, pokeballList, searchValue]);

  const onPokeballClick = (pokemonId: number) => {
    if (pokeballList.includes(pokemonId)) {
      setPokeballList(pokeballList.filter((id: number) => id !== pokemonId));
    } else {
      setPokeballList([...pokeballList, pokemonId]);
    }
  };

  return (
    <Container>
      <Search
        searchValue={searchValue}
        onClick={() => {
          setPageOpen(false);
        }}
        onChange={(sv: string) => {
          setSearchValue(sv);
        }}
        onFiltersClick={() => setPageOpen(false)}
      />
      <Feed
        items={items}
        hasMore={hasMore}
        isPageOpen={isPageOpen}
        fetchData={fetchData}
        setCurrentPokemon={setCurrentPokemon}
        setPageOpen={setPageOpen}
      />
      <PokePage
        isOpen={isPageOpen}
        pokemon={currentPokemon}
        onClose={() => { setPageOpen(false); }}
        onPokeballClick={onPokeballClick}
        pokemonInPokeball={pokeballList.includes(currentPokemon?.id)}
      />
    </Container>
  );
};

export default Main;
