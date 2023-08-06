import * as Styled from './Login.styles';
import Header from '@/@components/@shared/Header/Header';
import LoginForm from '@/@page/Login/unit/LoginForm';

const Login = () => {
  return (
    <>
      <Header.LoginHeader />
      <Styled.Root>
        <Styled.LoginTitleContainer>
          <Styled.LoginTitle>2023학년도 2학기 수강신청</Styled.LoginTitle>
        </Styled.LoginTitleContainer>

        <Styled.LoginFormContainer>
          <LoginForm />
        </Styled.LoginFormContainer>
      </Styled.Root>
    </>
  );
};

export default Login;
