import Button from '@/@components/@shared/Button/Button';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SearchSection = () => {
  return (
    <S.Root>
      <S.Container>
        <S.SubjectCourse>
          <S.CourseItem>
            <S.CourseLabel>교과목번호</S.CourseLabel>
          </S.CourseItem>
          <S.CourseBox>
            <input />
          </S.CourseBox>
        </S.SubjectCourse>
        <S.Course>
          <S.CourseItem>
            <S.CourseLabel>분반</S.CourseLabel>
          </S.CourseItem>
          <S.CourseBox>
            <input />
          </S.CourseBox>
        </S.Course>
        <S.ButtonContainer>
          <S.ButtonBox>
            <Button
              css={css`
                color: #fff;
                background-color: #dc3545;
                border-color: #dc3545;
              `}
            >
              빠른 수강신청
            </Button>
          </S.ButtonBox>
        </S.ButtonContainer>
      </S.Container>
    </S.Root>
  );
};

export default SearchSection;

const S = {
  Root: styled.div`
    /* margin-bottom: 1.25rem; */
    border: 1px solid #e1e2ea;
  `,

  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,

  SubjectCourse: styled.div`
    display: flex;
    flex: 0 0 20%;
    max-width: 100%;

    min-height: 55px;

    @media (max-width: 1000px) {
      flex: 0 0 60%;
    }
  `,

  Course: styled.div`
    display: flex;
    flex: 0 0 20%;
    max-width: 100%;

    min-height: 55px;

    @media (max-width: 1000px) {
      flex: 0 0 40%;
    }
  `,

  CourseItem: styled.div`
    flex: 0 0 88px;

    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 6px;

    box-sizing: border-box;
    border-left: 1px solid #e1e2ea;
    border-right: 1px solid #e1e2ea;
    background: #f8f9fa !important;
    color: #000;
    font-weight: 500;
    text-align: center;
    justify-content: center;

    height: 100%;

    @media (max-width: 1000px) {
      flex: 0 0 auto;
      padding: 6px 12px;
    }
  `,

  CourseLabel: styled.label`
    margin-bottom: 0;
    line-height: 1.4;
  `,

  CourseBox: styled.div`
    padding: 7px 10px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
    font-size: 16px;
    min-height: 10px;
    background-color: #fff;

    flex: 1;
    & > input {
      width: 100%;
      height: 31px;
      border-color: #ddd;
      padding: 0px 0px;

      display: block;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  `,

  ButtonContainer: styled.div`
    flex: 1;
    background: #f8f9fa !important;

    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,

  ButtonBox: styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    justify-content: left;
    padding-left: 15px;

    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 120px;
    flex: 0 0 120px;
    max-width: 120px;
    padding: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 1px solid #e1e2ea;
    border-right: 1px solid #e1e2ea;
    background: #f8f9fa !important;
    color: #000;
    font-weight: 500;
    text-align: center;

    @media (max-width: 1000px) {
      justify-content: center;
    }
  `,
};
