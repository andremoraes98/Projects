import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  clickPlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  clickRancking = () => {
    const { history } = this.props;
    history.push('/rancking');
  }

  render() {
    const { assertions, score } = this.props;
    const minPoint = 3;
    const failed = 'Could be better...';
    const good = 'Well Done!';
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          { assertions < minPoint ? failed : good }
        </h1>
        <div>
          <h2>
            {'Sua pontuação final foi '}
            <span data-testid="feedback-total-score">{score}</span>
            {' pontos.'}
          </h2>
          <h2>
            {'Você acertou '}
            <span data-testid="feedback-total-question">{assertions}</span>
            {' perguntas.'}
          </h2>
        </div>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.clickPlayAgain }
        >
          Play Again!
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.clickRancking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = ({
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
});

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Feedback);
