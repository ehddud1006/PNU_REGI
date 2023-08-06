import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RadioButtonGroupContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 5px;

    & > label {
      width: 70px;

      font-weight: 500;
      text-align: right;
      color: ${theme.colors.black_2};

      @media (min-width: ${theme.screenSize.xs}) {
        margin-right: 8px;
      }

      @media (min-width: ${theme.screenSize.sm}) {
        margin-right: 15px;
      }
    }
  `}
`;
