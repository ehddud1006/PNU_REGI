import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 0 15px;

  margin: 0 auto;
`;

export const LoginTitleContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 24px;

    font-size: 25px;
    color: ${theme.colors.black_2};
    text-align: center;
    font-weight: 700;
  `}
`;

export const LoginTitle = styled.h1`
  ${({ theme }) => css`
    @media (min-width: ${theme.screenSize.md}) {
      font-size: 30px;
      font-weight: 500;
    }
  `}
`;

export const LoginFormContainer = styled.div`
  border-radius: 3px;
  border: 1px solid #e6eaee;
  padding: 15px;
  margin: 0 auto 30px;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 20%);

  ${({ theme }) => css`
    @media (min-width: ${theme.screenSize.xs}) {
      padding: 30px;
    }

    @media (min-width: ${theme.screenSize.sm}) {
      max-width: 600px;
      padding: 50px 60px 30px;
    }
  `}
`;

export const LoginForm = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  margin: 0 -5px;
`;
