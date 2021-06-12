import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  render() {
    const { saveEmail, sumField } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {saveEmail}
          </div>
          <div data-testid="total-field">
            <p>
              Total:
              {sumField
                .reduce(
                  (acc, index) => acc
                + (index.exchangeRates[index.currency].ask * index.value), 0,
                )}
            </p>

          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </header>
        <Form />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
  sumField: state.wallet.expenses,
});

Wallet.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  sumField: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
