import React from 'react';
import PokeBadge, { PokeType } from 'shared/ui/badge/PokeBadge';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 16px;

  width: 148px;
  min-height: 212px;
  left: 31px;
  top: 343px;

  border: 2px solid #EFEFEF;
  box-sizing: border-box;
  border-radius: 10px;

  @media screen and (max-width: 370px) {
    width: 120px;
  }

  @media screen and (max-width: 310px) {
    width: 100px;
  }
`;

const Image = styled.img`
  width: 90%;
`;

const Name = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #000000;
  margin: 0 0 16px 0;
`;

const PokeTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: 1px;
  }
`;

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  types: PokeType[],
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc, imageAlt, name, types, onClick,
}) => (
  <Container onClick={onClick}>
    <Image src={imageSrc} alt={imageAlt} />
    <Name>{name}</Name>
    <PokeTypes>
      {types.map((type: PokeType) => <PokeBadge key={type} type={type} />)}
    </PokeTypes>
  </Container>
);

export default Card;
