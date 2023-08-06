import * as Styled from './RadioGroup.styles';
import Input from '@/@components/@shared/Input';
import type { Language } from '@/@page/Login/unit/LoginForm';

type RadioButtonGroupProps = {
  label: string;
  language: Language[];
  selectedValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const RadioButtonGroup = (props: RadioButtonGroupProps) => {
  const { label, language, selectedValue, onChange } = props;

  const renderLanguage = () => {
    return language.map(({ label, name, value }: Language) => {
      return (
        <Input.Radio
          value={value}
          label={label}
          key={label}
          id={label}
          name={name}
          checked={value === selectedValue}
          onChange={onChange}
        />
      );
    });
  };

  return (
    <Styled.RadioButtonGroupContainer>
      <label>{label}</label>
      {renderLanguage()}
    </Styled.RadioButtonGroupContainer>
  );
};

export default RadioButtonGroup;
