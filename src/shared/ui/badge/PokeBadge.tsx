import React from 'react';
import styled from 'styled-components';

export type PokeType = 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'psychic' | 'poison' | 'rock' | 'steel' | 'water';

type PokeBadgeProps = {
  type: PokeType;
  isSelected?: boolean;
}

type BadgeProps = Omit<PokeBadgeProps, 'type'> & { gradient: string };

const Badge = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 8px;
  box-sizing: border-box;
  background: ${(props) => props.gradient};
  border: ${(props) => (props.isSelected ? '2px solid #000000;' : 'none')};
  border-radius: 15px;
  width: fit-content;
  font-size: 10px;
  font-weight: 500;
  color: #000000;
`;

type PokeTypesMap = {
  [K in PokeType]: string
}

const pokeTypeGradientMap: PokeTypesMap = {
  bug: 'linear-gradient(180deg, #2CC432 0%, rgba(44, 196, 50, 0.55) 100%)',
  dark: 'linear-gradient(180deg, #666666 0%, rgba(102, 102, 102, 0.55) 100%)',
  dragon: 'linear-gradient(180deg, #6371EA 0%, rgba(234, 99, 99, 0.55) 100%)',
  electric: 'linear-gradient(180deg, #E7EA63 0%, rgba(231, 234, 99, 0.55) 100%)',
  fairy: 'linear-gradient(180deg, #EA63AC 0%, rgba(234, 99, 172, 0.55) 100%)',
  fighting: 'linear-gradient(180deg, #EA8463 0%, rgba(234, 132, 99, 0.55) 100%)',
  fire: 'linear-gradient(180deg, #EA7363 0%, rgba(234, 115, 99, 0.55) 100%)',
  flying: 'linear-gradient(180deg, #63D2EA 0%, #AFAFAF 99.98%, rgba(99, 220, 234, 0.333333) 99.99%, rgba(99, 226, 234, 0) 100%)',
  ghost: 'linear-gradient(180deg, #A763EA 0%, rgba(167, 99, 234, 0.55) 100%)',
  grass: 'linear-gradient(180deg, #63EA69 0%, rgba(99, 234, 105, 0.2) 100%)',
  ground: 'linear-gradient(180deg, #E7EA63 0%, rgba(234, 196, 99, 0.55) 100%)',
  ice: 'linear-gradient(180deg, #63EAEA 0%, rgba(99, 234, 234, 0.15) 100%)',
  normal: 'linear-gradient(180deg, #BABABA 0%, rgba(186, 186, 186, 0.55) 100%)',
  psychic: 'linear-gradient(180deg, #EA63DC 0%, rgba(234, 99, 220, 0.4) 100%)',
  poison: 'linear-gradient(180deg, #BF63EA 0%, rgba(191, 99, 234, 0.5) 100%)',
  rock: 'linear-gradient(180deg, #D6975D 0%, rgba(214, 151, 93, 0.55) 100%)',
  steel: 'linear-gradient(180deg, #8D95B0 0%, rgba(141, 149, 176, 0.55) 100%)',
  water: 'linear-gradient(180deg, #6371EA 0%, rgba(99, 113, 234, 0.55) 100%)',
};

const PokeBadge: React.FC<PokeBadgeProps> = ({ type, isSelected }) => {
  const gradient = pokeTypeGradientMap[type];

  return (
    <Badge gradient={gradient} isSelected={isSelected}>
      {/* TODO: Refactor to utility function */}
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </Badge>
  );
};

PokeBadge.defaultProps = {
  isSelected: false,
};

export default PokeBadge;
