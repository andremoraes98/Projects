import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestToken, saveUser } from '../redux/actions';
import logo from '../trivia.png';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.toggleDisableButton());
  }

  toggleDisableButton = () => {
    const { name, email } = this.state;
    if (name.length > 0 && email.length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  playButtonSubmit = async () => {
    const { requestTokenDispatch, history } = this.props;
    await requestTokenDispatch();
    history.push('/game');
  }

  render() {
    const { name, email, disabled } = this.state;
    const { requestTokenDispatch, dispatchSaveUser, history } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Bem vindo ao Trivia!
          </p>
          <form>
            <label htmlFor="player-name">
              Nome:
              <input
                type="text"
                id="player-name"
                name="name"
                data-testid="input-player-name"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                name="email"
                data-testid="input-gravatar-email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>

            <button
              type="button"
              data-testid="btn-play"
              disabled={ disabled }
              onClick={ () => {
                requestTokenDispatch(history);
                dispatchSaveUser(this.state);
              } }
            >
              Jogar
            </button>

            <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => history.push('/settings') }
            >
              Configurações
            </button>
          </form>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestTokenDispatch: (history) => dispatch(requestToken(history)),
  dispatchSaveUser: (stateUser) => dispatch(saveUser(stateUser)),
});

Login.propTypes = {
  requestTokenDispatch: PropTypes.func.isRequired,
  dispatchSaveUser: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
