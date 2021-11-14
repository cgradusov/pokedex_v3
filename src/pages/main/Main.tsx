import Search from 'features/Search/Search';
import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from 'features/Card/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 32px;
  min-height: calc(100vh - 64px);
`;

const ScrollableContainer = styled.div`
  overflow: scroll;
  max-height: calc(100vh - 64px - 120px);
  width: 100%;
`;

const StyledInfiniteScroll = styled(InfiniteScroll as unknown as AnyStyledComponent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > * {
    margin-bottom: 10px;
  }
`;

// TODO: Remove Mocks
// ** MOCKS **
const items = [0, 1, 2, 3, 4, 5, 6, 7];
const fetchData = () => console.log('Fetching More Data...');
const hasMore = true;
// ** MOCKS **

const Main = () => (
  <Container>
    <Search
      onChange={(e) => {
        const target = e.target as HTMLInputElement;
        console.log(target.value);
      }}
      onFiltersClick={() => console.log('Filters Click')}
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
            key={el}
            imageSrc="/assets/venusaur.png"
            imageAlt="venusaur"
            name="Venusaur #003"
            onClick={() => console.log('Click')}
            types={['grass', 'poison']}
          />
        ))}
      </StyledInfiniteScroll>
    </ScrollableContainer>
  </Container>
);

export default Main;
