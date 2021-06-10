import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, saveInStore } from '../actions/walletAPI';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      coin: 'USD',
      payment: 'cash',
      tag: 'food',
    };
    this.saveInformation = this.saveInformation.bind(this);
  }

  componentDidMount() {
    const { infoAPI } = this.props;
    infoAPI();
  }

  saveInformation(event) {
    const { target: { value, id } } = event;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { getWalletAPI, isLoading, saving } = this.props;
    const { value, description, coin, payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" value={ value } onChange={ (e) => this.saveInformation(e) } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" value={ description } onChange={ (e) => this.saveInformation(e) } />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" value={ coin } onChange={ (e) => this.saveInformation(e) }>
            {!isLoading && getWalletAPI
              .filter((code) => code.codein !== 'BRLT')
              .map((opCoin, index) => (
                <option value={ opCoin.code } key={ index }>{opCoin.code}</option>
              ))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" value={ payment } onChange={ (e) => this.saveInformation(e) }>
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ (e) => this.saveInformation(e) }>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => saving(this.state) }
        >
          Adicionar despesa
        </button>
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
  saving: (expenses) => dispatch(saveInStore(expenses)),
});

Form.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  getWalletAPI: PropTypes.arrayOf.isRequired,
  infoAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// Agradecimento ao Denis Turma 10 Tribo B
