import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { alteraScore, requestTrivia } from '../redux/actions';
import Header from '../components/Header';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextButton: false,
      numberOfQuestions: 0,
      timer: null,
      counter: 30,
    };
  }

  componentDidMount() {
    const { requestTriviaDispatch, token } = this.props;
    const oneSecond = 1000;
    const timer = setInterval(this.tick, oneSecond);
    requestTriviaDispatch(token);
    this.setState({ timer });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  tick = () => {
    const { counter, timer } = this.state;
    if (counter === 0) {
      this.setState({
        nextButton: true,
      });
      clearInterval(timer);
    } else {
      this.setState({
        counter: counter - 1,
      });
    }
  }

  changeNextButtonState = (event) => {
    const { timer } = this.state;
    this.setState({
      nextButton: true,
    });
    clearInterval(timer);
    const { dispatchScore } = this.props;
    dispatchScore(this.sumScore(event), this.sumAssertions(event));
  }

  difficultyQuestion = () => {
    const { numberOfQuestions } = this.state;
    const { trivia } = this.props;
    const tres = 3;
    const dois = 2;
    const um = 1;
    if (trivia[numberOfQuestions].difficulty === 'hard') {
      return tres;
    } if (trivia[numberOfQuestions].difficulty === 'medium') {
      return dois;
    } return um;
  }

  sumScore = (event) => {
    const { trivia } = this.props;
    const ten = 10;
    const { timer, numberOfQuestions } = this.state;
    if (event.target.innerHTML === trivia[numberOfQuestions].correct_answer) {
      return ten + (timer * this.difficultyQuestion());
    }
    return 0;
  }

  sumAssertions = (event) => {
    const { trivia } = this.props;
    const { numberOfQuestions } = this.state;
    const certo = 1;
    const errado = 0;
    if (event.target.innerHTML === trivia[numberOfQuestions].correct_answer) {
      return certo;
    }
    return errado;
  }

  nextQuestion = () => {
    const { numberOfQuestions } = this.state;
    const { trivia, history } = this.props;
    if (numberOfQuestions === trivia.length - 1) {
      history.push('/feedback');
    }
    this.setState({
      numberOfQuestions: numberOfQuestions + 1,
      nextButton: false,
      counter: 30,
    });
    const oneSecond = 1000;
    const timer = setInterval(this.tick, oneSecond);
    this.setState({ timer });
  }

  triviaQuestions = () => {
    const { trivia } = this.props;
    const { nextButton, counter } = this.state;
    const sortNumber = 0.5;
    const triviaQuestions = trivia.map((item, index) => (
      <>
        <section key={ index }>
          <p data-testid="question-category">{ item.category }</p>
          <p data-testid="question-text">{ item.question }</p>
          <div data-testid="answer-options">
            {
              item.incorrect_answers.reduce((acc, answer, indexOfAnswer) => (
                [...acc, (
                  <button
                    key={ `wrong-answer-${indexOfAnswer}` }
                    type="button"
                    data-testid={ `wrong-answer-${indexOfAnswer}` }
                    onClick={ this.changeNextButtonState }
                    className={ nextButton ? 'wrong-answer' : null }
                    disabled={ nextButton }
                  >
                    { answer }
                  </button>
                )]
              ), ([
                <button
                  key="correct-answer"
                  type="button"
                  data-testid="correct-answer"
                  onClick={ this.changeNextButtonState }
                  className={ nextButton ? 'correct-answer' : null }
                  disabled={ nextButton }
                >
                  { item.correct_answer }
                </button>,
              ]))
                .sort(() => Math.random() - sortNumber) // Retirado do link: https://www.delftstack.com/pt/howto/javascript/shuffle-array-javascript/
                .map((button) => button)
            }
          </div>
          { nextButton
            ? (
              <button
                type="button"
                data-testid="btn-next"
                onClick={ this.nextQuestion }
              >
                Next
              </button>)
            : null }
        </section>
        <section>
          <p>{`Tempo restante: ${counter}`}</p>
        </section>
      </>
    ));
    return triviaQuestions;
  }

  render() {
    const { numberOfQuestions } = this.state;
    return (
      <div>
        <Header />
        {
          this.triviaQuestions()[numberOfQuestions]
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  trivia: state.trivia,
});

const mapDispatchToProps = (dispatch) => ({
  requestTriviaDispatch: (token) => dispatch(requestTrivia(token)),
  dispatchScore: (score, assertions) => dispatch(alteraScore(score, assertions)),
});

Game.propTypes = {
  requestTriviaDispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
