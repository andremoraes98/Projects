import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      isRedirected: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  buttonClickRequisition = async () => {
    const { loginName: name } = this.state;
    const { changeRequisitionStatus } = this.props;
    this.setState({
      isRedirected: true,
    });
    await createUser({ name });
    changeRequisitionStatus();
  }

  render() {
    const { loginName, isRedirected } = this.state;
    const disabledButton = true;
    const minCharacterWord = 3;
    return isRedirected
      ? <Redirect to="/search" />
      : (
        <div className="centered login" data-testid="page-login">
          <h1>Login</h1>
          <form>
            <input
              name="loginName"
              type="text"
              placeholder="Nome"
              data-testid="login-name-input"
              value={ loginName }
              onChange={ this.onInputChange }
            />
            <button
              data-testid="login-submit-button"
              type="button"
              onClick={ this.buttonClickRequisition }
              disabled={
                loginName.length >= minCharacterWord
                  ? !disabledButton
                  : disabledButton
              }
            >
              Entrar
            </button>
          </form>
        </div>
      );
  }
}

Login.propTypes = {
  changeRequisitionStatus: PropTypes.func.isRequired,
};

export default Login;
