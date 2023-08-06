const colors = {
  white_1: '#FFFFFF',

  background_4: '#F5F4F3',
  background_3: '#F7F7F7',
  background_2: '#F6F4EE',
  background_1: '#FAFAF6',
  background_0: '#FDFDFD',

  grey_3: '#4a4c4e',
  grey_2: '#555',
  grey_1: '#F6F6FA',
  grey_0: '#dbdcdc',

  blue_5: '#0000FF', // blue
  blue_4: '#014a98',
  blue_3: '#025bb1',
  blue_2: '#043d92',
  blue_1: '#0d84ea',

  red_4: '#FF0000', // red

  black_4: '#000000',
  black_3: '#212529',
  black_2: '#333',
  black_1: '#555',
} as const;

// xs (extra small): <576px
// sm (small): >=576px
// md (medium): >=768px
// lg (large): >=992px
// xl (extra large): >=1200px
// xxl (extra extra large): >=1400px

const screenSize = {
  xs: '360px',
  sm: '576px',
  md: '768px',
};

const size = {
  1: '0.063rem',
  2: '0.125rem',
  3: '0.0187rem',
  4: '0.25rem',
  6: '0.375rem',
  8: '0.5rem',
  10: '0.625rem',
  11: '0.7rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  26: '1.625rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  35: '2.1875rem',
  38: '2.375rem',
  40: '2.5rem',
  50: '3.125rem',
  56: '3.5rem',
  60: '3.75rem',
  80: '5rem',
  90: '5.625rem',
  100: '6.25rem',
  110: '6.875rem',
  126: '7.875rem',
  140: '8.75rem',
  160: '10rem',
  170: '10.625rem',
  200: '12.5rem',
  220: '13.75rem',
  240: '15rem',
  256: '16rem',
  260: '16.25rem',
  280: '17.5rem',
  300: '18.75rem',
  350: '21.875rem',
  400: '25rem',
  450: '28.125rem',
  700: '43.75rem',
} as const;

const layers = {
  header: 4900,
  dimmed: 5000,
} as const;

const theme = {
  colors,
  screenSize,
  size,
  layers,
};

export default theme;
