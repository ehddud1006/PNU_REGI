import theme from '@/styles/theme';
import '@emotion/react';

type CustomTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
