import {
  START_REQUEST,
  SAVE_CURRENCY,
  SAVE_EXPENSE_INFO,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  CHANGE_EXPENSE } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  expenseValue: 0,
  wantToEdit: false,
  selectedExpense: {},
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case START_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case SAVE_CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
      isFetching: false,
      expenses: action.expenses,
    };
  case SAVE_EXPENSE_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.expenseInfos],
      expenseValue: action.value,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expenseId),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      wantToEdit: true,
      selectedExpense: state.expenses[action.expenseId],
    };
  case CHANGE_EXPENSE:
    return {
      ...state,
      wantToEdit: false,
      expenses: state.expenses.map((expense) => (expense.id === action.editedExpense.id
        ? action.editedExpense
        : expense)),
    };
  default:
    return state;
  }
};

export default wallet;
