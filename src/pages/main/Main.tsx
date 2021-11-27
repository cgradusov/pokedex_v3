import React, { useState, useEffect } from 'react';
import Search from 'features/Search/Search';
import styled from 'styled-components';

import PokePage from 'features/PokePage/PokePage';
import Feed from 'features/Feed/Feed';
import { Pokemon, PokeType } from 'entities/types';
import Filters from 'features/Filters/Filters';
import { HeightWeight } from 'processes/filter/types';
import { applyFilters } from 'processes/filter';
import { pokeSearch } from 'processes/search';
import useToggleState from 'hooks/useToggleState';
import useToggleLocalStorage from 'hooks/useToggleLocalStorage';

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
  const [selectedTypes, setTypes] = useToggleState<PokeType>([]);
  const [selectedHeights, setHeights] = useToggleState<HeightWeight>([]);
  const [selectedWeights, setWeights] = useToggleState<HeightWeight>([]);

  const [pokeballList, togglePokeballList] = useToggleLocalStorage<number>('pokeball', []);

  const [searchValue, setSearchValue] = useState<string>('');
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(2);
  const [items, setItems] = useState<Pokemon[]>([]);
  const [isPageOpen, setPageOpen] = useState(false);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(items[0]);

  const fetchData = () => {
    const pokeballFiltered = isFavouritesPage
      ? values.filter((p) => pokeballList.includes(p.id)) : values;

    setNextPage((prevState) => prevState + 1);
    setItems(pokeballFiltered.slice(0, 27 * nextPage));
  };

  // set hasMore
  useEffect(() => {
    const pokeballFiltered = isFavouritesPage
      ? values.filter((p) => pokeballList.includes(p.id)) : values;

    if (items.length === pokeballFiltered.length) {
      setHasMore(false);
    }
  }, [items, values]);

  useEffect(() => {
    const pokeballFiltered = values;
    const searchedPokeList = searchValue !== '' ? pokeballFiltered.filter(pokeSearch(searchValue)) : pokeballFiltered;
    const filteredPokeList = applyFilters(
      searchedPokeList,
      selectedTypes,
      selectedHeights,
      selectedWeights,
    );

    if (!isFavouritesPage) {
      setItems(filteredPokeList.slice(0, 27));
    } else {
      setItems(filteredPokeList.filter((p) => pokeballList.includes(p.id)).slice(0, 27));
    }
  }, [values,
    isFavouritesPage,
    pokeballList,
    searchValue,
    selectedTypes,
    selectedHeights,
    selectedWeights]);

  return (
    <Container>
      <Search
        searchValue={searchValue}
        isFiltersActive={
          Boolean(selectedTypes.length || selectedHeights.length || selectedWeights.length)
        }
        onClick={() => {
          setPageOpen(false);
          setFiltersOpen(false);
        }}
        onChange={(sv: string) => {
          setSearchValue(sv);
        }}
        onFiltersClick={() => {
          setPageOpen(false);
          setFiltersOpen(true);
        }}
      />
      <Feed
        items={items}
        hasMore={hasMore}
        isPageOpen={isPageOpen}
        isFiltersOpen={isFiltersOpen}
        fetchData={fetchData}
        setCurrentPokemon={setCurrentPokemon}
        setPageOpen={setPageOpen}
      />
      <PokePage
        isOpen={isPageOpen}
        pokemon={currentPokemon}
        onClose={() => { setPageOpen(false); }}
        onPokeballClick={togglePokeballList}
        pokemonInPokeball={pokeballList.includes(currentPokemon?.id)}
      />
      <Filters
        isOpen={isFiltersOpen}
        onClose={() => { setFiltersOpen(false); }}
        selectedTypes={selectedTypes}
        selectedHeights={selectedHeights}
        selectedWidths={selectedWeights}
        setTypes={setTypes}
        setHeights={setHeights}
        setWidths={setWeights}
      />
    </Container>
  );
};

export default Main;
