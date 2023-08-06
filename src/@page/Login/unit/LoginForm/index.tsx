import * as Styled from './Login.styles';
import Button from '@/@components/@shared/Button/Button';
import Input from '@/@components/@shared/Input';
import RadioButtonGroup from '@/@components/@shared/RadioGroup/RadioGroup';
import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Language = {
  label: string;
  name: string;
  value: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const language: Language[] = [
    {
      label: '국문',
      name: 'korean',
      value: 'korean',
    },
    {
      label: 'English',
      name: 'english',
      value: 'english',
    },
  ];

  const [selectedValue, setSelectedValue] = useState(language[0].value);

  const radioGroupHandler: ChangeEventHandler<HTMLInputElement> = e => {
    setSelectedValue(e.target.value);
  };

  return (
    <Styled.Root>
      <Styled.InputContainer>
        <Input css={Styled.CustomInput} label='ID' placeholder='학번' />
        <Input css={Styled.CustomInput} label='Password' placeholder='비밀번호' />
        <RadioButtonGroup
          label='Language'
          language={language}
          selectedValue={selectedValue}
          onChange={radioGroupHandler}
        />
      </Styled.InputContainer>
      <Styled.BunttonContainer>
        <Button css={Styled.CustomButton} onClick={() => navigate('/')}>
          로그인
        </Button>
      </Styled.BunttonContainer>
    </Styled.Root>
  );
};

export default LoginForm;
