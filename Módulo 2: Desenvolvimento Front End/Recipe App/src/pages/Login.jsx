import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const history = useHistory();

  const onClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  useEffect(() => {
    const minPass = 6;
    const emailFormat = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(email);
    const validatePass = password.length > minPass;

    if (validatePass && emailFormat) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [email, password]);

  return (
    <div className="content">
      <div className="login-box">
        <h2>TudiBão</h2>
        <p>Login</p>
        <form>
          <div className="user-box">
            <input
              value={ email }
              type="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div className="user-box">
            <input
              placeholder="Password"
              value={ password }
              type="password"
              name="password"
              required=""
              data-testid="password-input"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>
          <Button
            data-testid="login-submit-btn"
            disabled={ btnDisabled }
            type="button"
            onClick={ onClick }
            variant={ btnDisabled ? 'danger' : 'success' }
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
