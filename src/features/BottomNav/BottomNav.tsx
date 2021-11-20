import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BulbasaurIcon } from 'shared/ui/icons/Bulbasaur';
import { PokeballIcon } from 'shared/ui/icons/Pokeball';
import { SettingsIcon } from 'shared/ui/icons/Settings';

const Container = styled.div`
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px;

  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 64px;
  left: 0px;
  bottom: 0px;
`;

const Button = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 9px;
  line-height: 11px;
  text-decoration: none;

  height: 100%;
  width: 100%;
  margin: 0 5px;

  color: #a1a1a1;
`;

const activeButtonStyle = {
  color: 'black',
};

const BottomNav = () => (
  <Container>
    <Button exact to="/" activeStyle={activeButtonStyle}>
      <BulbasaurIcon />
      Pokemons
    </Button>

    {/* @ts-ignore */}
    <Button to="/fav" activeStyle={activeButtonStyle}>
      <PokeballIcon />
      Favourites
    </Button>

    {/* @ts-ignore */}
    <Button to="/about" activeStyle={activeButtonStyle}>
      <SettingsIcon />
      About
    </Button>
  </Container>
);

export default BottomNav;
