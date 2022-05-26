import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerToken from '../reducers';

const store = createStore(reducerToken, composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
}

export default store;
