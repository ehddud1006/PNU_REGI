import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Panel } from 'rc-collapse';

import { hideWithA11y } from '@/styles/mixin';

export const CustomPanel = styled(Panel)<{ isPaddingLeft?: boolean; isPadding?: boolean }>`
  .rc-collapse-motion {
    transition: height 0.5s, opacity 0.5s;
  }

  .rc-collapse-content-hidden {
    display: none;
  }

  .rc-collapse-header {
    background-color: rgba(0, 0, 0, 0.03);

    border-top: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    box-sizing: content-box;

    height: 36px;

    padding: 0.75rem 1.25rem;

    line-height: 36px;

    ${({ theme }) => css`
      color: ${theme.colors.black_3};
    `}
  }

  .rc-collapse-content {
    overflow: hidden;
  }

  ${({ isPaddingLeft }) =>
    isPaddingLeft &&
    css`
      .rc-collapse-content-box {
        min-height: 1px;
        padding: 1.25rem;
        padding-left: calc(1.25rem + 40px);
      }
    `}

  ${({ isPadding }) =>
    isPadding &&
    css`
      .rc-collapse-content-box {
        padding: 20px;
      }
    `}
`;

CustomPanel.defaultProps = {
  isPaddingLeft: true,
  isPadding: false,
};

export const Sentence = styled.p``;

export const StrongBlueBottomDashText = css`
  font-weight: bold;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  flex: 100%;

  position: relative;

  padding-left: 15px;

  margin: 0 20px 3px 0;

  &::before {
    content: '';

    position: absolute;
    top: 11px;
    left: 3px;

    display: block;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    ${({ theme }) => css`
      background-color: ${theme.colors.blue_3};
    `}
  }
`;

export const TableResponsive = styled.div`
  display: block;

  width: 100%;

  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;

  margin-bottom: 0;

  border-collapse: collapse;

  ${({ theme }) => css`
    border-top: 2px solid ${theme.colors.grey_3};

    font-size: 14px;
    color: ${theme.colors.black_3};
  `}

  caption {
    ${hideWithA11y}
  }
`;

export const TableHead = styled.thead`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.grey_0};

    tr {
      background-color: ${theme.colors.background_4};
    }

    th {
      position: relative;

      padding: 15px 12px;

      border: none;

      font-weight: 500;
      vertical-align: bottom;
      text-align: center;
    }

    th:not(:last-child)::before {
      content: '';
      position: absolute;
      top: 27.5px;
      right: 0;

      transform: translateY(-50%);

      display: block;

      width: 1px;
      height: 20px;

      background-color: ${theme.colors.grey_0};
    }
  `}
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    th {
      border-top: none;
      border-right: 1px solid ${theme.colors.grey_0};
      border-bottom: 1px solid ${theme.colors.grey_0};

      font-weight: normal;
      line-height: normal;

      padding: 8px 12px;

      vertical-align: middle;

      white-space: nowrap;
    }

    td {
      padding: 5px 12px;

      border-top: none;
      border-right: 1px solid ${theme.colors.grey_0};
      border-bottom: 1px solid ${theme.colors.grey_0};

      color: ${theme.colors.black_1};
      line-height: 1.3;
      text-align: center;
      vertical-align: middle;
    }

    td:last-child {
      border-right: none;
    }
  `}
`;
