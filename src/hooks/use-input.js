import { useState } from 'react';

const useInput = (valueValidation) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [fieldEdited, setFieldEdited] = useState(false);

  const valueIsValid = valueValidation(enteredValue);
  const hasError = fieldEdited && !valueIsValid;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = () => {
    setFieldEdited(true);
  };

  const reset = () => {
    setEnteredValue('');
    setFieldEdited(false);
  };

  return {
    value: enteredValue,
    setEnteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
