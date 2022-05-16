import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchCurrencyJSONFromAPI } from '../actions';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import EdittionWalletForm from '../components/EdittionWalletForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { getDataFromAPI, expenses } = this.props;
    getDataFromAPI(expenses);
  }

  render() {
    const { wantToEdit, history } = this.props;
    return (
      <>
        <Header
          history={ history }
        />
        { wantToEdit ? <EdittionWalletForm /> : <WalletForm /> }
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  wantToEdit: state.wallet.wantToEdit,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getDataFromAPI: (expense) => dispatch(fetchCurrencyJSONFromAPI(expense)),
});

Wallet.propTypes = {
  getDataFromAPI: Proptypes.func.isRequired,
  wantToEdit: Proptypes.bool.isRequired,
  expenses: Proptypes.arrayOf(Proptypes.object).isRequired,
  history: Proptypes.shape({
    action: Proptypes.string,
    block: Proptypes.func,
    createHref: Proptypes.func,
    go: Proptypes.func,
    goBack: Proptypes.func,
    goFoward: Proptypes.func,
    length: Proptypes.number,
    listen: Proptypes.func,
    location: Proptypes.objectOf(Proptypes.string),
    push: Proptypes.func,
    replace: Proptypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
