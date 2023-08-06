import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface DimmedProps {
  isColor?: boolean;
}

export const Dimmed = styled.div<DimmedProps>`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, isColor }) => css`
    z-index: ${theme.layers.dimmed};

    background-color: ${isColor && 'rgba(0, 0, 0, 0.5)'};
  `}
`;

Dimmed.defaultProps = {
  isColor: true,
};

export default Dimmed;
