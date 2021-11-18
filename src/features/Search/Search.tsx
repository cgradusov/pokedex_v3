import React from 'react';
import { FiltersIcon } from 'shared/ui/icons/Filters';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const SearchInput = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 0 20px;
  height: 40px;
  width: 250px;
`;

const FiltersButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

type SearchProps = {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  onFiltersClick: () => void;
}

const Search: React.FC<SearchProps> = ({ onChange, onFiltersClick }) => (
  <Container>
    <SearchInput type="text" onChange={onChange} placeholder="Type Name or Code" />
    <FiltersButton onClick={onFiltersClick}>
      <FiltersIcon />
    </FiltersButton>
  </Container>
);

export default Search;
