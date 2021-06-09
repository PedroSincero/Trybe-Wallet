import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Form from './Form';

class Wallet extends React.Component {
  constructor() {
    super();
    this.form = this.form.bind(this);
  }

  form() {
    return (
      <form>
        <label htmlFor="expenses">
          Valor
          <input type="number" name="expenses" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="number" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select name="coin">
            <option value="moeda">Moeda</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

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
          {this.form()}
        </header>
        {/* <Form /> */}
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
