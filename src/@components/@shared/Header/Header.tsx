import * as Styled from './Header.styles';
import { DateTimeContext } from '@/@components/@shared/DateTimeProvider';
import Icon from '@/@components/@shared/Icon';
import useViewport from '@/@hooks/@common/useViewPort';
import Timer from '@/@page/Main/unit/Timer';
import { PATH } from '@/Router';
import loginLogoImage from '@/assets/images/loginLogo.png';
import logoImage from '@/assets/images/logo.png';
import User from '@/assets/images/user.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentDateTime } = useContext(DateTimeContext);
  const { viewPort } = useViewport();
  return (
    <Styled.Root>
      <Styled.Logo>
        <Link to={PATH.MAIN}>
          <img
            src={logoImage}
            alt='부산대 로고'
            width={viewPort === 'tablet' ? 135 : 100}
            height={viewPort === 'tablet' ? 35 : 28}
          />
        </Link>
      </Styled.Logo>
      <Timer />
    </Styled.Root>
  );
};

Header.LoginHeader = function LoginHeader() {
  return (
    <Styled.LoginRoot>
      <Styled.Logo>
        <img src={loginLogoImage} alt='부산대 로고' width={135} height={35} />
      </Styled.Logo>
    </Styled.LoginRoot>
  );
};

export default Header;
