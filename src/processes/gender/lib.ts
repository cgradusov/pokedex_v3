// eslint-disable-next-line import/prefer-default-export
export const genderCalculator = (gender: number) => {
  switch (gender) {
    case -1:
      return '?';
    case 0:
      return 'm';
    default:
      return 'm/f';
  }
};
