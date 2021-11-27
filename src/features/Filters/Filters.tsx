import React from 'react';
import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import PokeBadge, { PokeType } from 'shared/ui/badge/PokeBadge';
import ParamButton from 'shared/ui/parambutton/ParamButton';

const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100vw;
`;

const Heading = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 60px;
`;

const SubHeading = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 32px;
`;

const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin-right: 2px;
    margin-bottom: 2px;
  }
`;

const HeightWeightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const types: PokeType[] = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'psychic', 'poison', 'rock', 'steel', 'water'];

export type HeightWeight = [number, number];
export type SelectedHeightWeight = HeightWeight[]

type FiltersProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedTypes: PokeType[];
  setTypes: (t: PokeType) => void;
  selectedHeights: SelectedHeightWeight;
  setHeights: (t: HeightWeight) => void;
  selectedWidths: SelectedHeightWeight;
  setWidths: (t: HeightWeight) => void;
}

const sizes: {[key: string]: HeightWeight} = {
  bigHeight: [70, 99999],
  mediumHeight: [30, 69],
  smallHeight: [0, 29],

  bigWeight: [150, 99999],
  mediumWeight: [100, 149],
  smallWeight: [0, 99],

};

const Filters: React.FC<FiltersProps> = ({
  isOpen, onClose, selectedTypes, setTypes, selectedHeights, setHeights, selectedWidths, setWidths,
}) => (
  <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[650]}>
    {/* @ts-ignore */}
    <Sheet.Container>
      {/* @ts-ignore */}
      <Sheet.Header />
      {/* @ts-ignore */}
      <Sheet.Content>

        <Container>
          <Heading>Filters</Heading>
          <SubHeading>Types</SubHeading>
          <TypesContainer>
            {types.map((t: PokeType) => (
              <PokeBadge
                key={t}
                onClick={() => setTypes(t)}
                type={t}
                isSelected={selectedTypes.includes(t)}
              />
            ))}
          </TypesContainer>
          <SubHeading>Height</SubHeading>
          <HeightWeightContainer>
            <ParamButton imageName="big_height" onClick={() => setHeights(sizes.bigHeight)} isSelected={selectedHeights.includes(sizes.bigHeight)} />
            <ParamButton imageName="medium_height" onClick={() => setHeights(sizes.mediumHeight)} isSelected={selectedHeights.includes(sizes.mediumHeight)} />
            <ParamButton imageName="small_height" onClick={() => setHeights(sizes.smallHeight)} isSelected={selectedHeights.includes(sizes.smallHeight)} />
          </HeightWeightContainer>
          <SubHeading>Weight</SubHeading>
          <HeightWeightContainer>
            <ParamButton imageName="big_weight" onClick={() => setWidths(sizes.bigWeight)} isSelected={selectedWidths.includes(sizes.bigWeight)} />
            <ParamButton imageName="medium_weight" onClick={() => setWidths(sizes.mediumWeight)} isSelected={selectedWidths.includes(sizes.mediumWeight)} />
            <ParamButton imageName="small_weight" onClick={() => setWidths(sizes.smallWeight)} isSelected={selectedWidths.includes(sizes.smallWeight)} />
          </HeightWeightContainer>
        </Container>
      </Sheet.Content>
    </Sheet.Container>

    {/* @ts-ignore */}
    <Sheet.Backdrop />
  </Sheet>
);

export default Filters;
