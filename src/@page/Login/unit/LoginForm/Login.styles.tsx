import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.form`
  display: flex;
  flex-wrap: wrap;

  margin: 0 5px;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: 0 5px;

    & > * {
      margin-bottom: ${theme.size[16]};
    }

    @media (min-width: ${theme.screenSize.md}) {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  `}
`;

export const CustomInput = (theme: Theme) => css`
  display: inline-block;

  height: 40px;
  width: 69%;

  padding: 0px 5px;

  border-color: ${theme.colors.grey_0};
  font-size: 15px;
`;

export const BunttonContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: 0 5px;

    @media (min-width: ${theme.screenSize.md}) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  `}
`;

export const CustomButton = (theme: Theme) => css`
  display: inline-block;

  width: 100%;
  height: 60px;

  background: ${theme.colors.blue_2};

  border: 1px solid transparent;
  border-color: ${theme.colors.blue_2};

  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  @media (min-width: ${theme.screenSize.md}) {
    max-width: 170px;
    height: 95px;
  }
`;
