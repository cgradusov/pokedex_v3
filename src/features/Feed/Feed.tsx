import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from 'features/Card/Card';

import { capitalizeString, formatNumber } from 'utils/stringUtils';
import { PokeType } from 'shared/ui/badge/PokeBadge';
import { Pokemon } from 'app/App';

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

type FeedProps = {
  items: Pokemon[]
  hasMore: boolean;
  isPageOpen: boolean;
  fetchData: () => void;
  setCurrentPokemon: (el: Pokemon) => void;
  setPageOpen: (isPageOpen: boolean) => void;
}

const Feed: React.FC<FeedProps> = ({
  items, hasMore, isPageOpen, fetchData, setCurrentPokemon, setPageOpen,
}) => (
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
);

export default Feed;
