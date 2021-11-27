/* eslint-disable import/prefer-default-export */
import { Stat, StatNameMap } from 'entities/types';

const statNameMap: StatNameMap = {
  hp: 'hp',
  attack: 'attack',
  defense: 'defence',
  'special-attack': 'specialAttack',
  'special-defense': 'specialDefence',
  speed: 'speed',
};

/**
 *
 * @param stats
 * @returns Stats object with remaped name and lowered by 0.6 value
 */

export const statsFormater = (stats: Stat[]) => stats.reduce((acc: any, s: Stat) => {
  const { bs, name: sn } = s;
  const statName = statNameMap[sn];
  acc[statName] = bs * 0.6;

  return acc;
}, {});
