import Stats from 'features/Stats/Stats';
import { Pokemon } from 'pages/main/Main';
import React from 'react';
import Sheet from 'react-modal-sheet';
import PokeBadge from 'shared/ui/badge/PokeBadge';
import styled from 'styled-components';
import genderCalculator from 'utils/pokeGenderCalc';
import statsFormater from 'utils/pokeStatsFormater';
import calculateWeaknesses from 'utils/pokeWeaknessCalc';
import { capitalizeString, formatNumber } from 'utils/stringUtils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 32px;
`;

const Name = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

const Image = styled.img`
  width: 148px;
`;

const Description = styled.div`
  width: 80%;
  text-align: center;
  color: #8b8b8b;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin: 20px;
`;

const StatsCotainer = styled.div`
  width: 200px;
`;

const ParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;

  & > p {
    margin: 0;
    font-size: 12px;
    line-height: 12px;
  }
`;

const StatsParamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 16px 0;
`;

const TypesWeakness = styled.div`
  margin-top: 16px;

  & > h3 {
    margin: 8px 0;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
  }
`;

const TypesWeaknessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > * {
    margin-right: 3px;
    margin-bottom: 3px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

type PokePageProps = {
  isOpen: boolean;
  pokemon: Pokemon;
  onClose: () => void;
};

// TODO: Remove @ts-ignore
const PokePage: React.FC<PokePageProps> = ({ isOpen, pokemon, onClose }) => {
  if (!pokemon) return <div />;

  const {
    name, id, desc, height, weight, gender, types, stats,
  } = pokemon;

  // TODO: add useCallback?
  const calculatedWeakness = calculateWeaknesses(types);

  return (
    <Sheet isOpen={isOpen} onClose={onClose} snapPoints={[650]}>
      {/* @ts-ignore */}
      <Sheet.Container>
        {/* @ts-ignore */}
        <Sheet.Header />
        {/* @ts-ignore */}
        <Sheet.Content>
          <Container>
            <Name>
              {`${capitalizeString(name)} #${formatNumber(id.toString())}`}
            </Name>
            <Image src={`/assets/${formatNumber(id.toString())}.png`} alt={name} />
            <Description>
              {desc}
            </Description>
            <StatsParamsContainer>
              <StatsCotainer>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Stats {...statsFormater(stats)} />
              </StatsCotainer>
              <ParamsContainer>
                <p>
                  Height:
                  {' '}
                  <b>
                    {height / 10}
                    {' '}
                    m
                  </b>
                </p>
                <p>
                  Weight:
                  {' '}
                  <b>
                    {weight / 10}
                    {' '}
                    kg
                  </b>
                </p>
                <p>
                  Gender:
                  {' '}
                  <b>
                    {genderCalculator(gender)}
                  </b>
                </p>
              </ParamsContainer>
            </StatsParamsContainer>
            <Footer>
              <TypesWeakness>
                <h3>Types:</h3>
                <TypesWeaknessContainer>
                  {types.map((t) => <PokeBadge key={t} type={t} />)}
                </TypesWeaknessContainer>
              </TypesWeakness>
              <TypesWeakness>
                <h3>Weaknesses:</h3>
                <TypesWeaknessContainer>
                  {calculatedWeakness.map((t) => <PokeBadge key={t} type={t} />)}
                </TypesWeaknessContainer>
              </TypesWeakness>
            </Footer>
          </Container>
        </Sheet.Content>
      </Sheet.Container>

      {/* @ts-ignore */}
      <Sheet.Backdrop />
    </Sheet>
  );
};

export default PokePage;
