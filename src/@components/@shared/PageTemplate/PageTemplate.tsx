import { PropsWithChildren } from 'react';

import Header from '@/@components/@shared/Header';

import * as Styled from './PageTemplate.styles';

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
