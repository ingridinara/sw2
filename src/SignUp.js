import React, { useState } from 'react';
import users from './datasignup';
import {
  ChangePassword,
  Container,
  Form,
  Label,
  StyleRedirect,
  StyledError,
  StyledInput,
  PageStyled,
  InputLabel,
  StyledButton,
  SpanError,
} from './signupstyled';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
//
const authenticateUser = (email, password) => {
  let authenticated = false;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.email === email && user.password === password) {
      authenticated = true;
    }
  }
  if (authenticated) {
    console.log('the user is correct');
    localStorage.setItem('TOKENStarWars', 'starwarsmolamucho');

    return true;
  } else {
    console.error('the user is incorrect');
    return false;
  }
};

//
const SignUp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  // input - state
  const [userEmail, setUserEmail] = useState(''); // value - email
  const [passwordInput, setPasswordInput] = useState(''); // value - contrasena
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  //input - regex
  const validateEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  };
  const validatePassword = (password) => {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(password) && password.length > 3;
  };
  //input - handleChange
  const handleChange = (e) => {
    if (e.target.name === 'userEmail') {
      setUserEmail(e.target.value); //value
      const val = e.target.value;
      const isEmail = validateEmail(val);
      console.log('Regex validate email: ', validateEmail, isEmail);
      setIsEmailError(!isEmail); // logica inversa
    } else if (e.target.name === 'passwordInput') {
      setPasswordInput(e.target.value);
      const password = e.target.value;
      const isPassword = validatePassword(password);
      setIsPasswordError(!isPassword); // logica inversa
      console.log('validate Password: ', validatePassword, isPassword);
    }
  };

  //button state
  const [loadingState, setloadingState] = useState(false);
  const [disabledState, setdisabledState] = useState(false);

  //button
  const handleClick = () => {
    console.log('clicked');
  };
  //form method
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloadingState(true);
    setdisabledState(true);

    try {
      if (!localStorage.getItem('users')) {
        users.push({ email: userEmail, password: passwordInput });
        // localStorage.setItem('users', JSON.stringify(users));
      } else {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        currentUsers.push({ email: userEmail, password: passwordInput });
        // localStorage.setItem('users', JSON.stringify(currentUsers));
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem('starwarsset', 'ok');
      setIsRegistered(true);
    } catch (err) {
      console.log(err);
    }

    setloadingState(false);
    setdisabledState(false);
  };
  ///////////////////////////////////////////
  const [error, setError] = useState('');

  //

  return (
    <>
      <PageStyled>
        <Container>
          <Form id="1" method="get" onSubmit={handleSubmit} autocomplete="off">
            <div>
              <InputLabel htmlFor="email">Email</InputLabel>

              <StyledInput
                type="email"
                placeholder="Introduce your email"
                value={userEmail}
                onChange={handleChange}
                id="userEmail"
                name="userEmail"
                error={isEmailError}
                errorText="Enter a valid email address..."
              ></StyledInput>
              <SpanError>
                {isEmailError ? (
                  <p>Please, introduce a valid e-mail address.</p>
                ) : null}
              </SpanError>
            </div>
            <div>
              <InputLabel htmlFor="password">Password</InputLabel>
              <StyledInput
                type="password"
                vale={passwordInput}
                placeholder="Introduce your password"
                onChange={handleChange}
                id="passwordInput"
                name="passwordInput"
                error={isPasswordError}
                minLength={6}
                errorText="The password to contain more than 6 characters and a uppercase letter"
              ></StyledInput>
              <SpanError>
                {isPasswordError ? (
                  <p>
                    A valid password must have at least 3 numbers and letters
                    combined.
                  </p>
                ) : null}
              </SpanError>
            </div>

            {error && (
              <StyledError>
                <p>{error}</p>
              </StyledError>
            )}
            <StyledButton
              text="Sign In"
              loadingText="Accediendo"
              iconPosition="left"
              type="submit"
              className="primary"
              isLoading={loadingState}
              disabled={disabledState}
              onClick={handleClick}
            >
              {loadingState ? <div>Loading</div> : <div>Sig Up </div>}
            </StyledButton>

            <StyleRedirect>
              Already have an account? <Link to="/signin">Sign In</Link>
            </StyleRedirect>
          </Form>
        </Container>
      </PageStyled>
    </>
  );
};

export default SignUp;
