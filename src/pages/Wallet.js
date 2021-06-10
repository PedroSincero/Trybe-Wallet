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
});

Wallet.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
