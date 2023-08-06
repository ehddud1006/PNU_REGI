import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  position: relative;

  max-width: 991px;
  min-width: 320px;
  min-height: calc(var(--vh, 1vh) * 100);

  margin: 0 auto;

  ${({ theme }) => css`
    background-color: ${theme.colors.background_0};
  `}
`;
