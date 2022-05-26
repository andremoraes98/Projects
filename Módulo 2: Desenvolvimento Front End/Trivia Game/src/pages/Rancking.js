import React from 'react';
import PropTypes from 'prop-types';

class Rancking extends React.Component {
  clickHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Página de Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.clickHome }
        >
          Home
        </button>
      </div>
    );
  }
}

Rancking.propTypes = ({
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
});

export default Rancking;
