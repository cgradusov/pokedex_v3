import Stats from 'features/Stats/Stats';
import React from 'react';
import Sheet from 'react-modal-sheet';
import PokeBadge from 'shared/ui/badge/PokeBadge';
import styled from 'styled-components';

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
const Image = styled.img``;
const Description = styled.div`
  width: 80%;
  text-align: center;
  color: #8b8b8b;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 20px;
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
  pokemonId: number;
  onClose: () => void;
};

// TODO: Remove @ts-ignore
const PokePage: React.FC<PokePageProps> = ({ isOpen, pokemonId, onClose }) => {
  // * MOCK *
  const pokemonDataMock = {
    3: {
      name: 'Venusaur #003',
      description: 'After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.',
      image: 'venusaur',
      types: ['grass', 'poison'],
      weaknesses: ['fire', 'flying', 'ice', 'psychic'],
      height: '2m',
      weight: '100kg',
      gender: ['m', 'f'],
      stats: {
        hp: 50,
        attack: 50,
        defence: 50,
        specialAttack: 50,
        specialDefence: 50,
        speed: 50,
      },
    },
  };

  const {
    name, image, description, height, weight, gender, types, weaknesses, stats,
    // @ts-ignore
  } = pokemonDataMock[pokemonId];

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
              {name}
            </Name>
            <Image src={`/assets/${image}.png`} alt={image} />
            <Description>
              {description}
            </Description>
            <StatsParamsContainer>
              <StatsCotainer>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Stats {...stats} />
              </StatsCotainer>
              <ParamsContainer>
                <p>
                  Height:
                  {' '}
                  <b>{height}</b>
                </p>
                <p>
                  Weight:
                  {' '}
                  <b>{weight}</b>
                </p>
                <p>
                  Gender:
                  {' '}
                  <b>
                    {gender.join('/')}
                  </b>
                </p>
              </ParamsContainer>
            </StatsParamsContainer>
            <Footer>
              <TypesWeakness>
                <h3>Types:</h3>
                <TypesWeaknessContainer>
                  {/* @ts-ignore */}
                  {types.map((t: string) => <PokeBadge key={t} type={t} />)}
                </TypesWeaknessContainer>
              </TypesWeakness>
              <TypesWeakness>
                <h3>Weaknesses:</h3>
                <TypesWeaknessContainer>
                  {/* @ts-ignore */}
                  {weaknesses.map((t: string) => <PokeBadge key={t} type={t} />)}
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
