import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { user } = this.props;
    const { name, score, gravatarEmail } = user;
    const hashGravatar = md5(gravatarEmail).toString();
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${hashGravatar}` }
          alt="Player perfil"
        />
        <p data-testid="header-player-name">
          { `Nome: ${name}`}
        </p>
        <p data-testid="header-score">
          { `Pontuação: ${score}` }
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.player,
});

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    gravatarEmail: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
