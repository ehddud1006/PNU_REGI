import theme from './theme';
import { css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;

    padding: 0;

    box-sizing: border-box;

    font: inherit;
    color: inherit;

    flex-shrink: 0;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    letter-spacing: -0.025rem;

    font-size: ${theme.size[16]};
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    color: ${theme.colors.black_1};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: inherit;
  }
`;

export default globalStyle;
