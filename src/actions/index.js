// Coloque aqui suas actions
const saveUser = (email) => ({
  type: 'EMAIL',
  user: {
    email,
  },
});

export default saveUser;
