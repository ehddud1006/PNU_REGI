import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FoldingCube = styled.div`
  position: relative;

  width: 50px;
  height: 50px;

  margin: 20px auto;

  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);

  ${({ theme }) => css`
    background: ${theme.colors.blue_4};
  `}
`;

const Cube = css`
  position: relative;

  float: left;

  width: 50%;
  height: 50%;

  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);

  &::before {
    content: '';
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: #009a53;

    -webkit-animation: sk-foldCubeAngle 0.9s infinite linear both;
    animation: sk-foldCubeAngle 0.9s infinite linear both;

    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  @-webkit-keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);

      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);

      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);

      opacity: 0;
    }
  }
  @keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);

      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);

      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);

      opacity: 0;
    }
  }
`;

export const CubePieceTop = styled.div`
  ${Cube}
`;

export const CubePieceRight = styled.div`
  ${Cube}

  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);

  &::before {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
`;

export const CubePieceBottom = styled.div`
  ${Cube}

  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);

  &::before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
`;

export const CubePieceLeft = styled.div`
  ${Cube}

  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);

  &::before {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
`;
