import Button from '@/@components/@shared/Button/Button';
import { DateTimeContext } from '@/@components/@shared/DateTimeProvider';
import Loading from '@/@components/@shared/Loading/Loading';
import Modal from '@/@components/@shared/Modal';
import Timer from '@/@page/Main/unit/Timer';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const HeaderDesk = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [state, setState] = useState('');
  const [open, setOpen] = useState(false);
  const { currentDateTime } = useContext(DateTimeContext);
  const { isFirst, setIsFirst } = useContext(DateTimeContext);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    setState(pathname);
  }, [pathname]);

  function checkTime() {
    const deadline = new Date('2023-08-08T08:00:00'); // Set to your desired timezone, this example is in UTC

    if (currentDateTime < deadline) {
      return false;
    }

    return true;
  }

  return (
    <S.Root>
      <S.Container>
        <S.Item>
          <img src='https://sugang.pusan.ac.kr/common/images/logo.png' alt='부산대 로고' />
        </S.Item>
        <S.Item>
          <div
            className={state === '/register' ? 'active' : ''}
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
            수강신청
          </div>
          <div className={state === '/' ? 'active' : ''} onClick={() => (location.href = '/')}>
            공지사항
          </div>
          <div>학생기본정보</div>
          <div>게시판</div>
        </S.Item>

        <Timer />
      </S.Container>
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
    </S.Root>
  );
};

export default HeaderDesk;

const S = {
  Root: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    width: 100%;

    z-index: 190;

    background-color: #043d92;
    border-bottom: none;

    height: 50px;

    @media (max-width: 1000px) {
      display: none;
    }
  `,

  Container: styled.div`
    justify-content: flex-start;
    max-width: 100% !important;
    height: 100%;
    position: relative;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 80px;
  `,

  Item: styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;

    & > img {
      height: 36px;
    }

    & > div {
      color: #fff;
      font-size: 18px;

      padding-left: 25px;
      padding-right: 25px;

      cursor: pointer;
    }

    & > a {
      color: #fff;
      font-size: 18px;

      padding-left: 25px;
      padding-right: 25px;
    }

    & > a.active {
      color: #abf6a1;
      text-decoration: underline 3px;
      text-underline-offset: 3px;
    }

    & > div.active {
      color: #abf6a1;
      text-decoration: underline 3px;
      text-underline-offset: 3px;
    }
  `,

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
