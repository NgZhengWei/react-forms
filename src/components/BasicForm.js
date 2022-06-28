import useInput from '../hooks/use-input-self';

const BasicForm = (props) => {
  const {
    value: firstName,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputClasses: firstNameClasses,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastName,
    inputBlurHandler: lastNameBlurHandler,
    inputChangeHandler: lastNameChangeHandler,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputClasses: lastNameClasses,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: email,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputClasses: emailClasses,
    reset: resetEmail,
  } = useInput(function validateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return input.match(validRegex);
  });

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      console.log(firstName, lastName, email);
      resetFirstName();
      resetLastName();
      resetEmail();
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='first-name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError ? (
            <p className='error-text'>First name is invalid</p>
          ) : (
            ''
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError ? (
            <p className='error-text'>Last name is invalid</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError ? (
          <p className='error-text'>Last name is invalid</p>
        ) : (
          ''
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
