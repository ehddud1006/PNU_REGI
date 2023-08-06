import LinkList from '@/assets/images/LinkList.png';
import List from '@/assets/images/List.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Side = () => {
  return (
    <S.Root>
      <S.Title>
        <div>
          <h3>학우님</h3>
          <span style={{ fontSize: '16px' }}>(202435529) </span>
        </div>
        <ul>
          <li>공과대학</li>
          <li>전기컴퓨터공학부</li>
        </ul>
      </S.Title>

      <S.List>
        <img width={230} height={260} src={List} alt='' />
        <img width={230} height={300} src={LinkList} alt='' />
      </S.List>
    </S.Root>
  );
};

export default Side;

const S = {
  Root: styled.div`
    display: block;
    width: 230px;
    left: 0;
    top: 50px;
    z-index: 99;

    background: #f6f6fa;
    position: fixed;
    right: -290px;

    height: 100vh;

    @media (max-width: 1000px) {
      display: none;
    }
  `,

  Title: styled.div`
    padding: 23px 15px 25px 15px;
    font-weight: 300;
    background: #0049b6;

    display: flex;
    flex-direction: column;
    & > div {
      display: flex;
    }
    & > div > h3 {
      color: #fff;

      font-size: 25px;
      font-weight: 400;
    }
    & > div > span {
      display: flex;
      align-items: flex-end;
      color: #fff;

      font-weight: 400;
      margin-bottom: 2px;
    }

    & > ul > li {
      position: relative;
      font-size: 13px;
      color: #9cbff5;
      display: inline-block;
      line-height: 1.4;
      padding-right: 5px;
    }

    & > ul > li::after {
      content: '·';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
  `,

  List: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Inner: styled.div`
    padding: 19px 15px 19px 17px;
  `,
};
