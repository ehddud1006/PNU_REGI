import * as Styled from './PageTemplate.styles';
import Header from '@/@components/@shared/Header';
import { PropsWithChildren } from 'react';

type PageTemplateProps = {
  isLogin?: boolean;
};

const PageTemplate = (props: PropsWithChildren<PageTemplateProps>) => {
  const { isLogin = false } = props;

  return (
    <Styled.Root>
      {isLogin ? <Header.LoginHeader /> : <Header />}
      {props.children}
    </Styled.Root>
  );
};

export default PageTemplate;
