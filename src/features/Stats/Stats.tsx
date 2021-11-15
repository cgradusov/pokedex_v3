import React from 'react';
import StatBar from 'shared/ui/statbar/StatBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 156px;
`;

type StatsProps = {
  hp: number,
  attack: number,
  defence: number,
  specialAttack: number,
  specialDefence: number,
  speed: number,
}

const Stats: React.FC<StatsProps> = ({
  hp, attack, defence, specialAttack, specialDefence, speed,
}) => (
  <Container>
    <StatBar
      name="HP"
      percentage={hp}
      color="linear-gradient(180deg, #36C63C 0%, rgba(54, 198, 60, 0.55) 100%)"
    />
    <StatBar
      name="Attack"
      percentage={attack}
      color="#EC7F70"
    />
    <StatBar
      name="Deffence"
      percentage={defence}
      color="#939AB4"
    />
    <StatBar
      name="Special Attack"
      percentage={specialAttack}
      color="#68D0E7"
    />
    <StatBar
      name="Special Defence"
      percentage={specialDefence}
      color="#AD6EEB"
    />
    <StatBar
      name="Speed"
      percentage={speed}
      color="#EEF093"
    />
  </Container>
);

export default Stats;
