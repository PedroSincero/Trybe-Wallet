import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/walletAPI';

class Form extends React.Component {
  componentDidMount() {
    const { infoAPI } = this.props;

    infoAPI();
  }

  render() {
    const { getWalletAPI, isLoading } = this.props;
    return (
      <form>
        {!isLoading && console.log(getWalletAPI[1].codein)}
        <label htmlFor="expenses">
          Valor
          <input type="number" id="expenses" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            {!isLoading && getWalletAPI
              .filter((code) => code.codein !== 'BRLT')
              .map((coin, index) => (
                <option value={ coin.code } key={ index }>{coin.code}</option>
              ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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
}

const mapStateToProps = (state) => ({
  getWalletAPI: state.wallet.currencies,
  isLoading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  infoAPI: () => dispatch(fetchAPI()),
});

Form.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getWalletAPI: PropTypes.arrayOf.isRequired,
  infoAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
