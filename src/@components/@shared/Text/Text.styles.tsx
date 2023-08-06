import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Text = styled.span``;

export const StrongText = styled.strong`
  font-weight: bold;
`;

export const RedText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red_4};
  `}
`;

export const BlueText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.blue_5};
  `}
`;

export const BlueBottomDashText = styled(Link)`
  ${({ theme }) => css`
    min-height: auto;

    padding: 0;

    margin: 0 10px 0 2px;

    border-bottom: 1px dashed currentColor;

    background-color: transparent;

    color: ${theme.colors.blue_1};
    font-size: 15px;
  `}
`;
