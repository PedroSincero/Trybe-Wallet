// Coloque aqui suas actions
const saveUser = (email) => ({
  type: 'EMAIL',
  payload: {
    email,
  },
});

export default saveUser;
