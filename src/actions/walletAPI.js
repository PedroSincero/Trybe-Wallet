export const walletAPI = (curries) => ({
  type: 'CURRENCIES',
  wallet: {
    currencies: Object.values(curries),
    loading: false,
  },
});

export const saveInStore = (expenses) => ({ type: 'EXPENSES', expenses });

export const requestAPI = () => ({ type: 'REQUEST_API', loading: true });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(walletAPI(data));
    } catch (error) {
      console.error(error);
    }
  };
}

// export default walletAPI;
