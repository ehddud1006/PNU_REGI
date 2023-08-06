/* eslint-disable react/no-unescaped-entities */
import * as Styled from './Main.styles';
import Button from '@/@components/@shared/Button/Button';
import Header from '@/@components/@shared/Header';
import Loading from '@/@components/@shared/Loading';
import PageTemplate from '@/@components/@shared/PageTemplate';
import Title from '@/@components/@shared/Title';
import useViewport from '@/@hooks/@common/useViewPort';
import HeaderDesk from '@/@page/Main/unit/HeaderDesk';
import Side from '@/@page/Main/unit/Side';
import CollapseItem from '@/@page/Main/unit/collapse/CollpaseItem';
import Message from '@/@page/Register/components/Message';
import RegisterSection from '@/@page/Register/components/RegisterSection';
import ResultSection from '@/@page/Register/components/ResultSection';
import SearchSection from '@/@page/Register/components/SearchSection';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CSSMotionProps, MotionEventHandler } from 'rc-motion';
import { useEffect, useState } from 'react';

const getCollapsedHeight: MotionEventHandler = () => ({
  height: 0,
  opacity: 1,
});
const getRealHeight: MotionEventHandler = (node: HTMLElement) => ({
  height: node.scrollHeight,
  opacity: 1,
});
const getCurrentHeight: MotionEventHandler = (node: HTMLElement) => ({
  height: node?.offsetHeight,
});

const collapseMotion: CSSMotionProps = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  motionDeadline: 500,
};

const Register = () => {
  const [activeKey, setActiveKey] = useState<React.Key | React.Key[]>(['0', '1', '2']);

  const { viewPort } = useViewport();

  return (
    <>
      <HeaderDesk />
      {(viewPort === 'tablet' || viewPort === 'mobile') && <Header />}
      <Styled.HeaderSection />

      <Styled.Root>
        <Side />

        <Styled.AsideSection />

        <Styled.Wrapper>
          <S.Container>
            <SearchSection />
            <RegisterSection />
            <Message />
            <ResultSection />
          </S.Container>
        </Styled.Wrapper>
      </Styled.Root>
    </>
  );
};

export default Register;

const S = {
  Container: styled.div`
    padding: 20px 15px 20px 15px;
  `,
};
