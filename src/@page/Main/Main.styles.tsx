import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Collapse from 'rc-collapse';

export const Root = styled.div`
  display: flex;
  /* position: relative;

  display: flex;
  width: 1280px;
  margin: 0 auto;
  padding: 0;

  background-color: #fff; */
`;

export const NoticeContainer = styled.section`
  padding: 8px 15px 30px 15px;
`;

export const CustomCollapse = styled(Collapse)`
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.white_1};
  `}
`;

export const RegisterButtonContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.section`
  padding: 8px 15px 30px 15px;
`;

export const Wrapper = styled.div`
  flex-grow: 1;

  @media (max-width: 1440px) {
    width: calc(100vw - 270px);
  }

  @media (max-width: 1000px) {
    width: calc(100vw - 30px);
  }
`;

export const AsideSection = styled.div`
  width: 230px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderSection = styled.div`
  height: 50px;

  @media (max-width: 1000px) {
    display: none;
  }
`;
