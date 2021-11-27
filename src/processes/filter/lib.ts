import { Pokemon, PokeType } from 'entities/types';
import { HeightWeight, SelectedHeightWeight } from 'processes/filter/types';

/* eslint-disable import/prefer-default-export */
export const applyFilters = (
  pokeValues: Pokemon[],
  selectedTypes: PokeType[],
  selectedHeights: SelectedHeightWeight,
  selectedWeights: SelectedHeightWeight,
) => pokeValues.filter((el: Pokemon) => selectedTypes.every((t: PokeType) => el.types.includes(t))
      && selectedHeights.every((h: HeightWeight) => el.height >= h[0] && el.height <= h[1])
      && selectedWeights.every((w: HeightWeight) => el.weight >= w[0] && el.weight <= w[1]));
