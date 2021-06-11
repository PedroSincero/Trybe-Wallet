import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, saveInStore } from '../actions/walletAPI';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
    };
    this.saveInfo = this.saveInfo.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { infoAPI } = this.props;
    infoAPI();
  }

  saveInfo(event) {
    const { target: { value, id } } = event;
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { infoAPI } = this.props;
    infoAPI();
    const { saving, getWalletAPI } = this.props;
    console.log(getWalletAPI[0]);
    this.setState({
      exchangeRates: getWalletAPI[0],
    }, () => saving(this.state));

    const { id } = this.state;
    this.setState((oldstate) => ({
      ...oldstate,
      id: id + 1,
    }));
  }

  select() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ (e) => this.saveInfo(e) }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { getWalletAPI, isLoading } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" id="value" value={ value } onChange={ (e) => this.saveInfo(e) } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" value={ description } onChange={ (e) => this.saveInfo(e) } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" value={ currency } onChange={ (e) => this.saveInfo(e) }>
            {!isLoading && Object.entries(getWalletAPI[0])
              .filter((code) => code[1].codein !== 'BRLT')
              .map((opCoin, index) => (
                <option value={ opCoin[1].code } key={ index }>{opCoin[1].code}</option>
              ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" value={ method } onChange={ (e) => this.saveInfo(e) }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ (e) => this.saveInfo(e) }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick() }
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

// Agradecimento ao Denis Turma 10 Tribo B, Alan Tanaka Turma 10 Tribo B, Jeferson Andrade Turma 10 Tribo B
