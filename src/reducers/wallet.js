// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_API':
    return { ...state,
      loading: action.loading,
    };

  case 'CURRENCIES':
    return { ...state,
      currencies: [...state.currencies, action.wallet.currencies],
      loading: action.loading,
    };

  case 'EXPENSES':
    return { ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
}

export default wallet;
