/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Svg } from '../Svg';

export const PokeballIcon: React.FC<any> = ({ className }) => (
  <Svg width="26" height="27" viewBox="0 0 26 27" fill="none" className={className}>
    <path d="M12.5 11.8077L15.1136 12.4231L19.2955 13.6538L24.5 16M6.5 11.5L4.13636 11.8077L2.04545 12.1154L1.04767 12.4231M25 13.5C25 20.1274 19.6274 25.5 13 25.5C6.37258 25.5 1 20.1274 1 13.5C1 6.87258 6.37258 1.5 13 1.5C19.6274 1.5 25 6.87258 25 13.5ZM13 11C13 12.933 11.433 14.5 9.5 14.5C7.567 14.5 6 12.933 6 11C6 9.067 7.567 7.5 9.5 7.5C11.433 7.5 13 9.067 13 11Z" stroke="currentColor" strokeWidth="1.3" />
  </Svg>
);
