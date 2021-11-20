/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Svg } from '../Svg';

export const PokeballFilledIcon: React.FC<any> = ({ className }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3.5 3.99997L9 0.999969H16L19.5 3.49997L23 8.49997V13L12 9.49997L10.5 7.49997L8.5 6.49997L6.5 7.49997L5 9.49997L0.5 9.99997L3.5 3.99997Z" fill="currentColor" />
    <circle cx="12" cy="12" r="11.5" stroke="black" />
    <circle cx="8.5" cy="9.5" r="3" stroke="black" />
    <path d="M11.2444 10.3077L13.9162 10.9231L16.0535 11.5385L18.1909 12.1538L19.7939 12.7692L21.397 13.3846L23 14M5.50002 10L2.69495 10.3077L0.557571 10.6154" stroke="black" strokeWidth="2" />
  </Svg>
);
