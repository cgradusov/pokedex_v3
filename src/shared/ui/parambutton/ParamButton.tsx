import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  isSelected?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 79px;
  height: 63px;

  background: #D2D2D2;
  border: ${(props) => (props.isSelected ? '2px solid #000000' : 'none')};
  box-sizing: border-box;
  border-radius: 5px;
`;

const Image = styled.img``;

type ParamsButton = {
  imageName: 'big_height' | 'medium_height' | 'small_height' | 'big_weight' | 'medium_weight' | 'small_weight';
  onClick: (name: string) => void;
  isSelected?: boolean;
}

const ParamButton: React.FC<ParamsButton> = ({ imageName, onClick, isSelected }) => (
  <Container isSelected={isSelected} onClick={() => onClick(imageName)}>
    <Image src={`/assets/filters/${imageName}.png`} alt={imageName} />
  </Container>
);

ParamButton.defaultProps = {
  isSelected: false,
};

export default ParamButton;
