import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  // handleCont = () => {
  //   const sunField =
  // }
  render() {
    const { saveEmail, sumField, sumValue } = this.props;
    // console.log(sumField);
    // console.log(sumValue);
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {saveEmail}
          </div>
          <div data-testid="total-field">
            {/* {sumField.map((teste) => (Number(teste.value) + Number(teste.total))) } */}
            {sumField.reduce((acc, index) => acc + (index.exchangeRates.find((e) => e.code === index.coin).ask * index.value), 0)}
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
  sumField: state.wallet.expenses,
  sumValue: state.wallet.expenses.exchangeRates,
});

Wallet.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
