import { PLAY_BUTTON_REQUEST,
  START_REQUISITION, TRIVIA_REQUEST, SAVE_USER,
  ALTERA_SCORE } from '../actions';

const INITIAL_STATE = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  token: '',
  isFetching: false,
  trivia: [],
};

const reducerToken = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case START_REQUISITION:
    return {
      ...state,
      isFetching: true,
    };
  case PLAY_BUTTON_REQUEST:
    return {
      ...state,
      token: action.token,
      isFetching: false,
    };
  case TRIVIA_REQUEST:
    return {
      ...state,
      trivia: action.trivia,
    };
  case SAVE_USER:
    return {
      ...state,
      player: {
        name: action.stateUser.name,
        assertions: 0,
        score: 0,
        gravatarEmail: action.stateUser.email },
    };
  case ALTERA_SCORE:
    return {
      ...state,
      player: {
        ...state.player,
        score: state.player.score + action.score,
        assertions: state.player.assertions + action.assertions,
      },
    };
  default:
    return state;
  }
};

export default reducerToken;
