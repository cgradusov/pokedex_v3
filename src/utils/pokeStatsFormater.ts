type PokeStat = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

type StatNameMap = {
  [key in PokeStat]: string;
};

export type Stat = {
  name: PokeStat;
  bs: number;
}

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

const statsFormater = (stats: Stat[]) => stats.reduce((acc: any, s: Stat) => {
  const { bs, name: sn } = s;
  const statName = statNameMap[sn];
  acc[statName] = bs * 0.6;

  return acc;
}, {});

export default statsFormater;
