import React from 'react';
import Stats from 'features/Stats/Stats';
import Sheet from 'react-modal-sheet';
import PokeBadge from 'shared/ui/badge/PokeBadge';
import styled, { keyframes } from 'styled-components';
import { genderCalculator } from 'processes/gender';
import { statsFormater } from 'processes/stats';
import { calculateWeaknesses } from 'processes/weakness';
import { capitalizeString, formatNumber } from 'utils/string';
import { PokeballFilledIcon } from 'shared/ui/icons/PokeballFilled';
import { Pokemon } from 'entities/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0 32px;

  @media screen and (max-width: 321px) {
    padding: 0 16px;
  }
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

type PokeBallProps = {
  isSelected?: boolean;
}

const breatheAnimation = keyframes`
 0% { transform: rotate(0deg); }
 10% { transform: rotate(-5deg); }
 20% { transform: rotate(-10deg); }
 30% { transform: rotate(-20deg); }
 40% { transform: rotate(-30deg); }
 50% { transform: rotate(-20deg); }
 60% { transform: rotate(-10deg); }
 70% { transform: rotate(0deg); }
 80% { transform: rotate(10deg); }
 90% { transform: rotate(20deg); }
 100% { transform: rotate(0deg); }
`;

const PokeBall = styled.div<PokeBallProps>`
  position: absolute;
  top: 0;
  right: 30px;
  z-index: 1;

  color: ${(props) => (props.isSelected ? 'red' : 'white')};
  transition: color 1s;

  &:not(:active) {
    animation-name: ${breatheAnimation};
    animation-duration: 1s;
  }
`;

type PokePageProps = {
  isOpen: boolean;
  pokemon: Pokemon;
  onClose: () => void;
  onPokeballClick: (pokemonId: number) => void;
  pokemonInPokeball: boolean;
};

// TODO: Remove @ts-ignore
const PokePage: React.FC<PokePageProps> = ({
  isOpen, pokemon, onClose, onPokeballClick, pokemonInPokeball,
}) => {
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
            <PokeBall
              isSelected={pokemonInPokeball}
              onClick={() => onPokeballClick(pokemon.id)}
            >
              <PokeballFilledIcon />
            </PokeBall>
            <Name>
              {`${capitalizeString(name)} #${formatNumber(id.toString())}`}
            </Name>
            <Image src={`/pokedex_v3/assets/${formatNumber(id.toString())}.png`} alt={name} />
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
