import * as Styled from './Input.styles';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  className?: string;
};

const Input = (props: InputProps) => {
  const { label, id, type = 'text', className, ...rest } = props;

  return (
    <Styled.Root>
      <label htmlFor={id}>{label}</label>
      <Styled.Input className={className} id={id} type={type} {...rest} />
    </Styled.Root>
  );
};

Input.Radio = function Radio(props: InputProps) {
  const { label, id, type = 'radio', className, ...rest } = props;

  return (
    <Styled.RadioInputContainer>
      <Styled.RadioInput className={className} id={id} type={type} {...rest} />
      <Styled.RadioInputLabel htmlFor={id}>{label}</Styled.RadioInputLabel>
    </Styled.RadioInputContainer>
  );
};

export default Input;
