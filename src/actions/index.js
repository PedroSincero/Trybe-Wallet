// Coloque aqui suas actions
const saveUser = (email) => ({
  type: 'EMAIL',
  payload: {
    email,
  },
});

export const deleteExpense = (id) => ({ type: 'DELETE', id });
export default saveUser;
