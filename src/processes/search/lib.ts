import { Pokemon } from 'entities/types';
import { formatNumber } from 'utils/string';

// eslint-disable-next-line import/prefer-default-export
export const pokeSearch = (search: string) => {
  if (!Number.isNaN(search) && !Number.isNaN(parseFloat(search))) {
    return (el: Pokemon) => formatNumber(el.id.toString()).includes(search);
  }

  return (el: Pokemon) => el.name.includes(search);
};
