import { useState } from 'react';

const useInputSelf = (validateValue) => {
  const [value, setValue] = useState('');
  const [inputEdited, setInputEdited] = useState(false);

  const inputBlurHandler = () => {
    setInputEdited(true);
  };

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setInputEdited(false);
    setValue('');
  };

  const valueIsValid = validateValue(value);
  const inputHasError = !valueIsValid && inputEdited;
  const inputClasses = inputHasError ? 'form-control invalid' : 'form-control';

  return {
    value,
    inputBlurHandler,
    inputChangeHandler,
    valueIsValid,
    hasError: inputHasError,
    inputClasses,
    reset,
  };
};

export default useInputSelf;
