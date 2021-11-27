export type PokeStat = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

export type StatNameMap = {
  [key in PokeStat]: string;
};

export type Stat = {
  name: PokeStat;
  bs: number;
}

export type PokeType = 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'ghost' | 'grass' | 'ground' | 'ice' | 'normal' | 'psychic' | 'poison' | 'rock' | 'steel' | 'water';

export type Pokemon = {
  id: number, name: string, height: number, weight: number,
  stats: Stat[],
  types: PokeType[],
  gender: number,
  desc: string,
  isInPokeball?: boolean;
}
