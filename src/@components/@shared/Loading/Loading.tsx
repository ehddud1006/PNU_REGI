// import './loading.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Dimmed from '@/@components/@shared/Dimmed';

import * as Styled from './Loading.styles';

type DimmedProps = {
  isColor?: boolean;
};

const Loading = (props: DimmedProps) => {
  const { isColor } = props;

  return ReactDOM.createPortal(
    <Dimmed isColor={isColor}>
      <Styled.FoldingCube>
        <Styled.CubePieceTop />
        <Styled.CubePieceRight />
        <Styled.CubePieceBottom />
        <Styled.CubePieceLeft />
      </Styled.FoldingCube>
    </Dimmed>,
    document.querySelector('#root') as Element
  );
};

export default Loading;
