import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

const useInputs = <T = Record<string, string | boolean | number>>(
  initialValues: T
): [T, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, Dispatch<SetStateAction<T>>] => {
  const [values, setValues] = useState<T>(initialValues);

  const getValue: ChangeEventHandler<HTMLInputElement> = e => {
    return e.target.value;
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValues(prevValues => ({
      ...prevValues,
      [e.target.name]: getValue(e),
    }));
  };

  return [values, handleChange, setValues];
};

export default useInputs;
