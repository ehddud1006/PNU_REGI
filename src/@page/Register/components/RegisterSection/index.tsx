/* eslint-disable import/extensions */
import Button from '@/@components/@shared/Button/Button';
import { RegisterDataProviderContext } from '@/@components/@shared/RegisterDataProvider';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';

const RegisterSection = () => {
  const { registerData, handleData, handleData3 } = useContext(RegisterDataProviderContext);
  const [deadLine, setDeadLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeadLine(true);
    }, 2850); // Change state after 2 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []); // Empty dependency array means this effect will run once when the component mounts

  useEffect(() => {
    console.log('hi');

    return () => {
      console.log('end');
    };
  }, []);

  return (
    <S.Root>
      <S.Tab>
        <S.TabItem>희망과목담기</S.TabItem>
      </S.Tab>
      <S.TabContent>
        <S.Table>
          <S.TableHeader>
            <thead>
              <S.Tr>
                <S.Th>
                  <S.ThInner>NO</S.ThInner>
                  <div style={{ width: '42px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>신청</S.ThInner>
                  <div style={{ width: '78px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>교과목명</S.ThInner>
                  <div style={{ width: '88px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>교과목번호</S.ThInner>
                  <div style={{ width: '91px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>분반</S.ThInner>
                  <div style={{ width: '48px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>집단구분</S.ThInner>
                  <div style={{ width: '73px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>교과구분</S.ThInner>
                  <div style={{ width: '73px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>학점</S.ThInner>
                  <div style={{ width: '46px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>담당교수</S.ThInner>
                  <div style={{ width: '71px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>개설학과</S.ThInner>
                  <div style={{ width: '73px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>시간표요약</S.ThInner>
                  <div style={{ width: '158px' }} />
                </S.Th>
                <S.Th>
                  <S.ThInner>비고</S.ThInner>
                  <div style={{ width: '198px' }} />
                </S.Th>
              </S.Tr>
            </thead>
          </S.TableHeader>
        </S.Table>
        <S.TabContentConatiner>
          <S.TableBody>
            <S.TableBodyHeader>NO</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>신청</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>교과목명</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>교과목번호</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>분반</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>집단구분</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>교과구분</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>학점</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>담당교수</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>개설학과</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>시간표요약</S.TableBodyHeader>
            <S.Line />
            <S.TableBodyHeader>비고</S.TableBodyHeader>
          </S.TableBody>
          {registerData.map((el: any, index: any) => {
            return (
              <S.TableItemContanier key={index}>
                <S.TableItem>{el.no}</S.TableItem>
                <S.TableItem>
                  {el.application}
                  <Button
                    css={
                      el.application
                        ? css`
                            min-height: 30px;
                            padding: 0 9px;
                            margin: 2px 0;
                            font-size: 14px;

                            color: #28a745;
                            background-color: transparent;
                            border: 1px solid #28a745;
                            opacity: 0.65;
                          `
                        : css`
                            min-height: 30px;
                            padding: 0 9px;
                            margin: 2px 0;
                            font-size: 14px;

                            color: #033975;
                            background-color: transparent;
                            border: 1px solid #033975;
                            opacity: 0.65;
                          `
                    }
                    onClick={() => {
                      if (deadLine) {
                        handleData3();
                      } else {
                        handleData(el.no);
                      }
                    }}
                  >
                    {el.application ? '완료' : '신청'}
                  </Button>
                </S.TableItem>
                <S.TableItem>{el.subjectName}</S.TableItem>
                <S.TableItem>{el.subjectNumber}</S.TableItem>
                <S.TableItem>{el.bunban}</S.TableItem>
                <S.TableItem>{el.class}</S.TableItem>
                <S.TableItem>{el.gruopClassification}</S.TableItem>
                <S.TableItem>{el.credits}</S.TableItem>
                <S.TableItem>{}</S.TableItem>
                <S.TableItem>{el.department}</S.TableItem>
                <S.TableItem style={{ display: 'flex', flexDirection: 'column' }}>{el.timetableSummary}</S.TableItem>
                <S.TableItem>{}</S.TableItem>
              </S.TableItemContanier>
            );
          })}
        </S.TabContentConatiner>
      </S.TabContent>
    </S.Root>
  );
};

export default RegisterSection;

const S = {
  Root: styled.div`
    margin-top: 20px;
  `,
  Tab: styled.ul`
    border-bottom: 1px solid #043d92;
  `,
  TabItem: styled.div`
    width: fit-content;

    color: #043d92;
    background-color: #fff;
    font-weight: 500;
    margin-bottom: -1px;
    border: 1px solid #043d92;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding: 0.5rem 1rem;
    border-bottom: none;
  `,

  TabContent: styled.div`
    border: 1px solid #dee2e6;
    border-top: none;

    overflow: hidden;
  `,

  TabContentConatiner: styled.div`
    position: relative;

    display: block;
    width: 100%;
    overflow-x: auto;

    height: 350px;
    padding-bottom: 47.5px;
    border-bottom: 1px solid #dee2e6;
  `,

  TableHeader: styled.div``,

  Table: styled.table`
    width: 1067.34px;
    color: #232324;
    font-size: 14px;
    border: 1px solid #dee2e6;
    border-top: 2px solid #4a4c4e;

    margin-top: 15px;
  `,

  Tr: styled.tr``,

  Th: styled.th`
    position: relative;

    &:not(:last-child)::before {
      content: '';
      position: absolute;
      top: 21.5px;
      right: 0;
      transform: translateY(-50%);
      display: block;
      width: 1px;
      height: 20px;
      background-color: #dbdcdc;
    }
  `,

  ThInner: styled.div`
    padding: 0.75rem;
    vertical-align: bottom;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  `,

  TableBody: styled.div`
    /* overflow-x: auto;
    overflow-y: auto; */
    /* height: 100%; */

    min-width: calc(100vw - 270px);

    display: grid;
    grid-template-columns:
      minmax(46px, 5%) 1px minmax(61px, 7%) 1px minmax(104px, 10%) 1px minmax(90px, 10%) 1px minmax(52px, 6%) 1px minmax(
        52px,
        10%
      )
      1px
      minmax(77px, 10%) 1px minmax(87px, 6%) 1px minmax(52px, 10%) 1px minmax(77px, 10%) 1px minmax(104px, 12%) 1px minmax(149px, 1fr);
    /* grid-template-columns:
      minmax(96px, 1fr) minmax(122px, 1fr) minmax(194px, 1fr) minmax(171px, 1fr) minmax(106px, 1fr) minmax(149px, 1fr)
      minmax(165px, 1fr) minmax(106px, 1fr) minmax(149px, 1fr) minmax(194px, 1fr) minmax(270px, 1fr); */

    grid-template-rows: minmax(70px, auto);

    border: 1px solid #ddd;
    border-top: 2px solid #4a4c4e;
    justify-items: center;
    align-items: center;

    @media (max-width: 1000px) {
      min-width: 1067.34px;
    }
  `,

  TableBodyHeader: styled.div`
    position: relative;
    width: fit-content;

    text-align: center;
    font-size: 14px;
  `,

  Line: styled.span`
    display: block;
    width: 1px;
    height: 20px;
    background-color: #dbdcdc;
  `,

  TableItemContanier: styled.div`
    /* overflow-x: auto;
    overflow-y: auto; */
    /* height: 100%; */

    min-width: calc(100vw - 270px);

    display: grid;
    grid-template-columns:
      minmax(46px, 5%) minmax(61px, 7%) minmax(104px, 10%) minmax(90px, 10%) minmax(52px, 6%) minmax(52px, 10%)
      minmax(77px, 10%) minmax(87px, 6%) minmax(52px, 10%) minmax(77px, 10%) minmax(104px, 12%) minmax(149px, 1fr);
    /* grid-template-columns:
  minmax(96px, 1fr) minmax(122px, 1fr) minmax(194px, 1fr) minmax(171px, 1fr) minmax(106px, 1fr) minmax(149px, 1fr)
  minmax(165px, 1fr) minmax(106px, 1fr) minmax(149px, 1fr) minmax(194px, 1fr) minmax(270px, 1fr); */

    grid-template-rows: minmax(50px, auto);

    border: 1px solid #ddd;
    justify-items: center;
    align-items: center;
    background-color: #ddd;

    grid-gap: 1px;

    @media (max-width: 1000px) {
      min-width: 1067.34px;
    }
  `,

  TableItem: styled.div`
    overflow-x: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;

    background-color: #fff;

    font-size: 14px;
  `,
};
