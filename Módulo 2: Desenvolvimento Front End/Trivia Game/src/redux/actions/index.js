export const PLAY_BUTTON_REQUEST = 'PLAY_BUTTON_REQUEST';
export const START_REQUISITION = 'START_REQUISITION';
export const TRIVIA_REQUEST = 'TRIVIA_REQUEST';
const INVALID_TOKEN_CODE = 3;
export const SAVE_USER = 'SAVE_USER';
export const ALTERA_SCORE = 'ALTERA_SCORE';

export const startRequisition = () => ({
  type: START_REQUISITION,
});

export const requisitionButton = (token) => ({
  type: PLAY_BUTTON_REQUEST,
  token,
});

export const triviaRequest = (trivia) => ({
  type: TRIVIA_REQUEST,
  trivia,
});

export const saveUser = (stateUser) => ({
  type: SAVE_USER,
  stateUser,
});

export const alteraScore = (score, assertions) => ({
  type: ALTERA_SCORE,
  score,
  assertions,
});

export const requestToken = (history) => async (dispatch) => {
  dispatch(startRequisition());
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  dispatch(requisitionButton(data.token));
  history.push('/game');
};

export const requestTrivia = (token) => async (dispatch) => {
  let response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  let data = await response.json();
  if (data.response_code === INVALID_TOKEN_CODE) {
    const dispatchRequestToken = await dispatch(requestToken());
    response = await fetch(`https://opentdb.com/api.php?amount=5&token=${dispatchRequestToken.token}`);
    data = await response.json();
  }
  return dispatch(triviaRequest(data.results));
};
