import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';

import { DateTimeContext } from '@/@components/@shared/DateTimeProvider';
import alarm from '@/assets/images/alarm.png';
import downTime from '@/assets/images/downTime.png';

const Timer = () => {
  const { currentDateTime, timeRemaining } = useContext(DateTimeContext);

  const formatTime = (date: any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Note: JavaScript month is 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  const formatRemainTime = (milliseconds: any) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <>
      <S.Root>
        <img width={22} height={22} src={alarm} alt='' style={{ display: 'inline-block', margin: '0 5px 5px 0' }} />
        <div style={{ fontWeight: '400' }}>{formatTime(currentDateTime)}</div>
        <S.Bar />
        <img
          width={22}
          height={22}
          src={downTime}
          alt=''
          style={{ display: 'inline-block', margin: '0 5px 5px 5px' }}
        />
        <div style={{ fontWeight: '400' }}>{formatRemainTime(timeRemaining)}</div>
        <S.Trick />
      </S.Root>
    </>
  );
};

export default Timer;

const S = {
  Root: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 0;

    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    background: #043d92;
    padding: 0;
    color: #fff;

    font-size: 16px;
    font-weight: 400 !important;
  `,

  Bar: styled.div`
    display: block;
    width: 1px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.2);

    margin: 0 5px 0 10px;
  `,

  Trick: styled.div`
    width: 250px;
  `,
};
