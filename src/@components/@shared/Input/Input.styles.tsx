import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { hideWithA11y } from '@/styles/mixin';

export const Root = styled.div<{ isShowLabel?: boolean }>`
  ${({ theme, isShowLabel = true }) => css`
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

      ${isShowLabel ||
      css`
        ${hideWithA11y}
      `}
    }
  `}
`;

export const Input = styled.input`
  display: block;

  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);

  padding: 0.375rem 0.75rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;

  background-color: #fff;
  background-clip: padding-box;

  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const RadioInputContainer = styled.div`
  display: inline-flex;
  align-items: center;

  margin-right: 1rem;

  min-height: 1.5rem;
`;

export const RadioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: #adb5bd solid 1px;
  border-radius: 50%;

  &::after {
    display: block;
    width: 1rem;
    height: 1rem;
    content: '';
    background: 50%/50% 50% no-repeat;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");

    border-radius: 50%;
  }

  &:checked {
    background-color: #007bff;
    border: none;
  }

  &:focus {
    color: #495057;
    background-color: #007bff;
    border: none;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

export const RadioInputLabel = styled.label`
  margin-left: 8px;
`;
