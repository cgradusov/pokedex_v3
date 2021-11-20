export default {
  normal: {
    double_damage_from: ['fighting'], double_damage_to: [], half_damage_from: [], half_damage_to: ['rock', 'steel'], no_damage_from: ['ghost'], no_damage_to: ['ghost'],
  },
  fighting: {
    double_damage_from: ['flying', 'psychic', 'fairy'], double_damage_to: ['normal', 'rock', 'steel', 'ice', 'dark'], half_damage_from: ['rock', 'bug', 'dark'], half_damage_to: ['flying', 'poison', 'bug', 'psychic', 'fairy'], no_damage_from: [], no_damage_to: ['ghost'],
  },
  flying: {
    double_damage_from: ['rock', 'electric', 'ice'], double_damage_to: ['fighting', 'bug', 'grass'], half_damage_from: ['fighting', 'bug', 'grass'], half_damage_to: ['rock', 'steel', 'electric'], no_damage_from: ['ground'], no_damage_to: [],
  },
  poison: {
    double_damage_from: ['ground', 'psychic'], double_damage_to: ['grass', 'fairy'], half_damage_from: ['fighting', 'poison', 'bug', 'grass', 'fairy'], half_damage_to: ['poison', 'ground', 'rock', 'ghost'], no_damage_from: [], no_damage_to: ['steel'],
  },
  ground: {
    double_damage_from: ['water', 'grass', 'ice'], double_damage_to: ['poison', 'rock', 'steel', 'fire', 'electric'], half_damage_from: ['poison', 'rock'], half_damage_to: ['bug', 'grass'], no_damage_from: ['electric'], no_damage_to: ['flying'],
  },
  rock: {
    double_damage_from: ['fighting', 'ground', 'steel', 'water', 'grass'], double_damage_to: ['flying', 'bug', 'fire', 'ice'], half_damage_from: ['normal', 'flying', 'poison', 'fire'], half_damage_to: ['fighting', 'ground', 'steel'], no_damage_from: [], no_damage_to: [],
  },
  bug: {
    double_damage_from: ['flying', 'rock', 'fire'], double_damage_to: ['grass', 'psychic', 'dark'], half_damage_from: ['fighting', 'ground', 'grass'], half_damage_to: ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'], no_damage_from: [], no_damage_to: [],
  },
  ghost: {
    double_damage_from: ['ghost', 'dark'], double_damage_to: ['ghost', 'psychic'], half_damage_from: ['poison', 'bug'], half_damage_to: ['dark'], no_damage_from: ['normal', 'fighting'], no_damage_to: ['normal'],
  },
  steel: {
    double_damage_from: ['fighting', 'ground', 'fire'], double_damage_to: ['rock', 'ice', 'fairy'], half_damage_from: ['normal', 'flying', 'rock', 'bug', 'steel', 'grass', 'psychic', 'ice', 'dragon', 'fairy'], half_damage_to: ['steel', 'fire', 'water', 'electric'], no_damage_from: ['poison'], no_damage_to: [],
  },
  fire: {
    double_damage_from: ['ground', 'rock', 'water'], double_damage_to: ['bug', 'steel', 'grass', 'ice'], half_damage_from: ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'], half_damage_to: ['rock', 'fire', 'water', 'dragon'], no_damage_from: [], no_damage_to: [],
  },
  water: {
    double_damage_from: ['grass', 'electric'], double_damage_to: ['ground', 'rock', 'fire'], half_damage_from: ['steel', 'fire', 'water', 'ice'], half_damage_to: ['water', 'grass', 'dragon'], no_damage_from: [], no_damage_to: [],
  },
  grass: {
    double_damage_from: ['flying', 'poison', 'bug', 'fire', 'ice'], double_damage_to: ['ground', 'rock', 'water'], half_damage_from: ['ground', 'water', 'grass', 'electric'], half_damage_to: ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'], no_damage_from: [], no_damage_to: [],
  },
  electric: {
    double_damage_from: ['ground'], double_damage_to: ['flying', 'water'], half_damage_from: ['flying', 'steel', 'electric'], half_damage_to: ['grass', 'electric', 'dragon'], no_damage_from: [], no_damage_to: ['ground'],
  },
  psychic: {
    double_damage_from: ['bug', 'ghost', 'dark'], double_damage_to: ['fighting', 'poison'], half_damage_from: ['fighting', 'psychic'], half_damage_to: ['steel', 'psychic'], no_damage_from: [], no_damage_to: ['dark'],
  },
  ice: {
    double_damage_from: ['fighting', 'rock', 'steel', 'fire'], double_damage_to: ['flying', 'ground', 'grass', 'dragon'], half_damage_from: ['ice'], half_damage_to: ['steel', 'fire', 'water', 'ice'], no_damage_from: [], no_damage_to: [],
  },
  dragon: {
    double_damage_from: ['ice', 'dragon', 'fairy'], double_damage_to: ['dragon'], half_damage_from: ['fire', 'water', 'grass', 'electric'], half_damage_to: ['steel'], no_damage_from: [], no_damage_to: ['fairy'],
  },
  dark: {
    double_damage_from: ['fighting', 'bug', 'fairy'], double_damage_to: ['ghost', 'psychic'], half_damage_from: ['ghost', 'dark'], half_damage_to: ['fighting', 'dark', 'fairy'], no_damage_from: ['psychic'], no_damage_to: [],
  },
  fairy: {
    double_damage_from: ['poison', 'steel'], double_damage_to: ['fighting', 'dragon', 'dark'], half_damage_from: ['fighting', 'bug', 'dark'], half_damage_to: ['poison', 'steel', 'fire'], no_damage_from: ['dragon'], no_damage_to: [],
  },
};
