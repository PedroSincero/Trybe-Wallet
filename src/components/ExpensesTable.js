import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.table = this.table.bind(this);
  }

  table() {
    const { expenses, excluir } = this.props;
    return (
      expenses.map(({ id, description, tag, method, value, currency, exchangeRates }) => {
        const coin = exchangeRates[currency];
        return (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{coin.name}</td>
            <td>{parseFloat(coin.ask).toFixed(2)}</td>
            <td>{(coin.ask * value).toFixed(2)}</td>
            <td>Real</td>
            <button type="button" onClick={ () => excluir(id) }>Delete</button>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>{ this.table() }</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  excluir: (item) => dispatch(deleteExpense(item)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

// Agradecimentos a Adão Junior Turma 10 - Tribo B
