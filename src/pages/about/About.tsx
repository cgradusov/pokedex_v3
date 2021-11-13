import React from 'react';
import styled from 'styled-components';
import { GithubIcon } from 'shared/ui/icons/Github';
import { InstagramIcon } from 'shared/ui/icons/Instagram';
import { TelegramIcon } from 'shared/ui/icons/Telegram';
import Venusaur from './venusaur.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 32px;
  align-items: center;
  min-height: calc(100vh - 164px);
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-top: 24px;
`;

const Description = styled.p`
  display: block;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const Img = styled.img`
  width: 215px;
  height: 215px;
`;

const ContactsContainer = styled.div`
  margin-top: auto;
`;

const ContactsHeader = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

const ContactsButtons = styled.div`
  display: flex;
`;

const ContactButton = styled.a`
  margin: 0 16px;
  color: #a1a1a1;
  text-decoration: none;

  &:active {
    color: #474747;
  }
`;

const About = () => (
  <Container>
    <Heading>Pokedex App</Heading>
    <Img src={Venusaur} alt="Venusaur" />
    <Description>
      Pokedex App made with web technologies by
      {' '}
      <br />
      Constantine Gradusov
    </Description>
    <ContactsContainer>
      <ContactsHeader>
        Contacts:
      </ContactsHeader>
      <ContactsButtons>
        <ContactButton href="https://t.me/cgradusov" target="_blank">
          <TelegramIcon />
        </ContactButton>
        <ContactButton href="https://github.com/cgradusov" target="_blank">
          <GithubIcon />
        </ContactButton>
        <ContactButton href="https://instagram.com/cgradusov/" target="_blank">
          <InstagramIcon />
        </ContactButton>
      </ContactsButtons>
    </ContactsContainer>
  </Container>
);

export default About;
