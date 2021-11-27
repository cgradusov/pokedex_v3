import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const Name = styled.div`
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  text-align: center;

  color: #000000;
  margin-right: 8px;
  width: 50px;
`;

const Bar = styled.div`
  height: 14px;
  width: 70%;
  border-radius: 8px;
  background-color: #c4c4c4;
`;

type StatBarProps = {
  name: string;
  color: string;
  percentage: number;
}

const ColoredBar = styled.div <Omit<StatBarProps, 'name'>>`
  height: 14px;
  border-radius: 8px;
  width: ${(props) => `${props.percentage}%`};
  background: ${(props) => props.color};

  transition: width 1s;
`;

const StatBar: React.FC<StatBarProps> = ({ name, color, percentage }) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(percentage);
  }, [percentage]);

  return (
    <Container>
      <Name>{name}</Name>
      <Bar>
        <ColoredBar percentage={width} color={color} />
      </Bar>
    </Container>
  );
};

export default StatBar;
