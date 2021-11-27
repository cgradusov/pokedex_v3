import React, { useState, useEffect } from 'react';
import Search from 'features/Search/Search';
import styled from 'styled-components';

import PokePage from 'features/PokePage/PokePage';
import { Pokemon } from 'app/App';
import Feed from 'features/Feed/Feed';
import useLocalStorage from 'hooks/useLocalStorage';
import { formatNumber } from 'utils/stringUtils';
import { PokeType } from 'shared/ui/badge/PokeBadge';
import Filters, { HeightWeight, SelectedHeightWeight } from 'features/Filters/Filters';

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
  const [selectedTypes, setSelectedTypes] = useState<PokeType[]>([]);
  const [selectedHeights, setSelectedHeights] = useState<SelectedHeightWeight>([]);
  const [selectedWeights, setSelectedWeights] = useState<SelectedHeightWeight>([]);

  const setTypes = (t: PokeType) => {
    if (selectedTypes.includes(t)) {
      setSelectedTypes(selectedTypes.filter((el) => el !== t));
    } else {
      setSelectedTypes([...selectedTypes, t]);
    }
  };

  const setHeights = (h: HeightWeight) => {
    if (selectedHeights.includes(h)) {
      setSelectedHeights(selectedHeights.filter((el) => el !== h));
    } else {
      // setSelectedHeights([...selectedHeights, h]);
      setSelectedHeights([h]);
    }
  };

  const setWeights = (w: HeightWeight) => {
    if (selectedWeights.includes(w)) {
      setSelectedWeights(selectedWeights.filter((el) => el !== w));
    } else {
      // setSelectedWeights([...selectedWeights, w]);
      setSelectedWeights([w]);
    }
  };

  const [pokeballList, setPokeballList] = useLocalStorage<number[]>('pokeball', []);
  const [searchValue, setSearchValue] = useState<string>('');

  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(2);
  const [items, setItems] = useState<Pokemon[]>([]);
  const [isPageOpen, setPageOpen] = useState(false);
  const [isFiltersOpen, setFiltersOpen] = useState(false);
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

  // eslint-disable-next-line arrow-body-style
  const applyFilters = (pokeValues: Pokemon[]) => {
    // eslint-disable-next-line arrow-body-style
    return pokeValues.filter((el: Pokemon) => {
      return selectedTypes.every((t: PokeType) => el.types.includes(t))
        && selectedHeights.every((h: HeightWeight) => el.height >= h[0] && el.height <= h[1])
        && selectedWeights.every((w: HeightWeight) => el.weight >= w[0] && el.weight <= w[1]);
    });
  };

  useEffect(() => {
    const searchedPokeList = searchValue !== '' ? values.filter(pokeSearch(searchValue)) : values;
    const filteredPokeList = searchValue !== '' ? applyFilters(searchedPokeList) : applyFilters(values);

    if (!isFavouritesPage) {
      setItems(filteredPokeList.slice(0, 27));
    } else {
      setItems(filteredPokeList.filter((p: Pokemon) => pokeballList.includes(p?.id)).slice(0, 27));
    }
  }, [values,
    isFavouritesPage,
    pokeballList,
    searchValue,
    selectedTypes,
    selectedHeights,
    selectedWeights]);

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
        onPokeballClick={onPokeballClick}
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
