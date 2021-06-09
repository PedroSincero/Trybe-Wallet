import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { saveEmail } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">
            {saveEmail}
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            - Um elemento que exiba o email do usuário que fez login.
            - Crie um campo com a despesa total gerada pela lista de gastos.
            - Crie um campo que mostre que qual câmbio está sendo utilizado,
            que será neste caso BRL
          </div>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  saveEmail: state.user.email,
});

Wallet.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
