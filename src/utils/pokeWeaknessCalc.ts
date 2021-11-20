/* eslint-disable camelcase */
import pt from 'prefetched/pokeTypes';
// TODO: export type to global types file?
import { PokeType } from 'shared/ui/badge/PokeBadge';

type PokeTypeModifiers = {
  double_damage_from: PokeType[],
  double_damage_to: PokeType[],
  half_damage_from: PokeType[],
  half_damage_to: PokeType[],
  no_damage_from: PokeType[],
  no_damage_to: PokeType[],
}

type PokeTypeData = {
  [key in PokeType]: PokeTypeModifiers
}

const pokeTypes = pt as PokeTypeData;
type PPTM = Partial<PokeTypeModifiers>;

const calculateWeaknesses = (types: PokeType[]) => {
  if (types.length === 0) {
    return [];
  }
  const selectedTypesData: PokeTypeModifiers[] = types.map((t) => pokeTypes[t]);
  const combinedTypesData: PPTM = selectedTypesData.reduce((acc: PPTM, el: PokeTypeModifiers) => {
    const keys = Object.keys(el) as unknown as (keyof PokeTypeModifiers)[];

    keys.forEach((k) => {
      acc[k] = [...(acc[k] ?? []), ...el[k]];
    });

    return acc;
  }, {});

  const weaknesses = combinedTypesData.double_damage_from ?? [];
  const strengths = combinedTypesData.double_damage_to ?? [];
  const immunes = combinedTypesData.no_damage_from ?? [];
  const half = combinedTypesData.half_damage_from ?? [];

  const weaknessesList: PokeType[] = weaknesses.filter(
    (w: PokeType) => !types.includes(w)
      && !strengths.includes(w)
      && !immunes.includes(w)
      && !half.includes(w),
  );

  return [...new Set(weaknessesList)];
};

export default calculateWeaknesses;
