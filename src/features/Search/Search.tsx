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

const SearchInputContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
`;

const SearchInput = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 0 20px;
  height: 40px;
  width: 100%;
`;

const FiltersButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: relative;
`;

const ClearButton = styled.div`
  font-size: 10px;
  position: absolute;
  top: 12px;
  right: 16px;
  color: white;
  border-radius: 50%;
  background-color: #a4a4a4aa;
  line-height: 16px;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FiltersActive = styled.div`
  position: absolute;
  top: -4px;
  right: -8px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: #EB7C6C;
`;

type SearchProps = {
  searchValue: string;
  isFiltersActive: boolean;
  onChange: (search: string) => void;
  onFiltersClick: () => void;
  onClick: () => void;
}

const Search: React.FC<SearchProps> = ({
  searchValue, isFiltersActive, onClick, onChange, onFiltersClick,
}) => (
  <Container>
    <SearchInputContainer>
      <SearchInput
        value={searchValue}
        type="text"
        onClick={onClick}
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
          const target = e.target as HTMLInputElement;

          onChange(target.value);
        }}
        placeholder="Type Name or Code"
      />
      {searchValue ? (
        <ClearButton onClick={() => onChange('')}>
          x
        </ClearButton>
      ) : null}

    </SearchInputContainer>
    <FiltersButton onClick={onFiltersClick}>
      <FiltersIcon />
      {isFiltersActive ? <FiltersActive /> : null}
    </FiltersButton>
  </Container>
);

export default Search;
