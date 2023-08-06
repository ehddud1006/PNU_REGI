import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  padding-bottom: 8px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${({ theme }) => css`
    @media (min-width: ${theme.screenSize.sm}) {
      margin-bottom: 20px;
    }

    @media (min-width: ${theme.screenSize.md}) {
      margin-bottom: 22px;
    }
  `};
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 25px;

  ${({ theme }) => css`
    color: ${theme.colors.grey_2};

    @media (min-width: ${theme.screenSize.sm}) {
      font-size: 28px;
    }

    @media (min-width: ${theme.screenSize.md}) {
      font-size: 29px;
    }
  `};
`;
