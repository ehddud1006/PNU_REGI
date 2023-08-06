/* eslint-disable react/no-unescaped-entities */
import * as Styled from './Main.styles';
import Button from '@/@components/@shared/Button/Button';
import { DateTimeContext } from '@/@components/@shared/DateTimeProvider';
import Header from '@/@components/@shared/Header';
import Loading from '@/@components/@shared/Loading';
import Modal from '@/@components/@shared/Modal';
import PageTemplate from '@/@components/@shared/PageTemplate';
import Title from '@/@components/@shared/Title';
import useViewport from '@/@hooks/@common/useViewPort';
import HeaderDesk from '@/@page/Main/unit/HeaderDesk';
import Side from '@/@page/Main/unit/Side';
import CollapseItem from '@/@page/Main/unit/collapse/CollpaseItem';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CSSMotionProps, MotionEventHandler } from 'rc-motion';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const MainPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const { viewPort } = useViewport();

  const [loading, setLoading] = useState(false);

  const [activeKey, setActiveKey] = useState<React.Key | React.Key[]>(['0', '1', '2']);
  const { currentDateTime } = useContext(DateTimeContext);
  const { isFirst, setIsFirst } = useContext(DateTimeContext);

  function checkTime() {
    const deadline = new Date('2023-08-08T08:00:00'); // Set to your desired timezone, this example is in UTC

    if (currentDateTime < deadline) {
      return false;
    }

    return true;
  }

  return (
    <>
      <HeaderDesk />
      {(viewPort === 'tablet' || viewPort === 'mobile') && <Header />}
      <Styled.HeaderSection />

      <Styled.Root>
        {/* <Loading isColor={false} /> */}
        <Side />

        <Styled.AsideSection />

        <Styled.Wrapper>
          <Styled.NoticeContainer>
            {/* <Title content='공지사항' /> */}
            <Styled.CustomCollapse openMotion={collapseMotion} onChange={setActiveKey} activeKey={activeKey}>
              {CollapseItem.slice(0, 3)}
            </Styled.CustomCollapse>
          </Styled.NoticeContainer>

          <Styled.RegisterButtonContainer>
            <Button
              css={css`
                margin-bottom: 30px;
              `}
              onClick={() => {
                const isNavigate = checkTime();

                if (isNavigate) {
                  if (!isFirst) {
                    navigate('/register');
                  } else {
                    setLoading(true);
                    setIsFirst(false);
                    setTimeout(() => {
                      navigate('/register');
                    }, 5000);
                  }
                } else setOpen(true);
              }}
            >
              수강신청 바로가기
            </Button>
          </Styled.RegisterButtonContainer>

          <Styled.ContactContainer>
            <Styled.CustomCollapse openMotion={collapseMotion} defaultActiveKey='0'>
              {CollapseItem[3]}
            </Styled.CustomCollapse>
          </Styled.ContactContainer>
        </Styled.Wrapper>
        <Modal visible={open} onModalClose={closeModal}>
          <S.PopHeader>알림</S.PopHeader>
          <S.PopBody>
            <S.Text>수강신청기간이 아닙니다!</S.Text>
            <S.ButtonContainer>
              <Button
                css={css`
                  display: inline-block;
                  width: 100px;
                  height: 38px;
                  line-height: 38px;
                  font-size: 14px;
                  text-align: center;
                  color: #fff;
                  border-radius: 4px;
                  border-bottom: 2px solid #eee;
                  font-size: 14px;
                  padding: 0;
                  border-color: #b73e3e;
                  background: #b73e3e;
                `}
                onClick={closeModal}
              >
                확인
              </Button>
            </S.ButtonContainer>
          </S.PopBody>
        </Modal>
        {loading && <Loading />}
      </Styled.Root>
    </>
  );
};

export default MainPage;

const S = {
  PopHeader: styled.div`
    width: 360px;
    height: 45px;
    line-height: 45px;
    font-size: 17px;
    border-radius: 5px 5px 0 0;
    background: #033975;
    border-bottom: 1px solid #033975;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    padding: 0 15px;
    color: #fff;
  `,

  PopBody: styled.div`
    padding: 20px;
    background: #fff;
    border-radius: 0 0 5px 5px;
  `,

  Text: styled.div`
    text-align: center;
    padding: 25px 0 25px 0;
    font-size: 17px;
    color: #333;
    line-height: 26px;
    word-break: break-all;
  `,

  ButtonContainer: styled.div`
    font-size: 0;
    line-height: 0;
    padding-top: 20px;
    text-align: center;
  `,
};
