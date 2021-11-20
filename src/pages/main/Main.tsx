import React, { useState, useEffect } from 'react';
import Search from 'features/Search/Search';
import styled, { AnyStyledComponent } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from 'features/Card/Card';
import PokePage from 'features/PokePage/PokePage';
import pl from 'prefetched/pokemonsList';
import { capitalizeString, formatNumber } from 'utils/stringUtils';
import { PokeType } from 'shared/ui/badge/PokeBadge';
import { Stat } from 'utils/pokeStatsFormater';

export type Pokemon = {
  id: number, name: string, height: number, weight: number,
  stats: Stat[],
  types: PokeType[],
  gender: number,
  desc: string
}

type PokemonList = {
  [key: string]: Pokemon
}

const pokemonsList = pl as PokemonList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 32px;
  min-height: calc(100vh - 64px);
`;

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 64px - 120px);
  width: 100%;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const StyledInfiniteScroll = styled(InfiniteScroll as unknown as AnyStyledComponent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin-bottom: 10px;
    margin-right: 2px;
  }
`;

// TODO: Move pokemon values loading to App component?
const values = Object.values(pokemonsList);

const Main = () => {
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState(2);
  const [items, setItems] = useState(values.slice(0, 27));
  const [isPageOpen, setPageOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(items[0]);
  const fetchData = () => {
    setNextPage((prevState) => prevState + 1);
    setItems(values.slice(0, 27 * nextPage));
  };

  useEffect(() => {
    if (items.length === values.length) {
      setHasMore(false);
    }
  }, [items]);

  return (
    <Container>
      <Search
        onClick={() => {
          setPageOpen(false);
        }}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          // eslint-disable-next-line no-console
          console.log(target.value);
        }}
        onFiltersClick={() => setPageOpen(false)}
      />
      <ScrollableContainer id="feed">
        <StyledInfiniteScroll
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="feed"
        >
          {items.map((el) => (
            <Card
              key={el?.id}
              imageSrc={`/assets/${formatNumber(el?.id.toString())}.png`}
              imageAlt={el.name}
              name={`${capitalizeString(el.name)} #${formatNumber(el?.id.toString())}`}
              onClick={() => {
                if (!isPageOpen) {
                  setCurrentPokemon(el);
                  setPageOpen(true);
                }
              }}
              types={el.types as PokeType[]}
            />
          ))}
        </StyledInfiniteScroll>
      </ScrollableContainer>
      <PokePage
        isOpen={isPageOpen}
        pokemon={currentPokemon}
        onClose={() => { setPageOpen(false); }}
      />
    </Container>
  );
};

export default Main;
