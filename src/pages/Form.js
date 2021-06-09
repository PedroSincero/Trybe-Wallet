import React from 'react';

class Form extends React.Component {
  render() {
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
}

export default Form;
