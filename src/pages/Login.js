import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    }

  }

  handleValidEmail = (event) => {
    const { target: { value, id }} = event;
    const { email } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ 

    this.setState({
    [id]: value,
    validEmail: regex.test(email),
    });
  }

  handleValidPassword = (event) => {
    const { target: { value, id }} = event;
    const { password } = this.state
    const NUM_MAGIC = 5

    this.setState({
    [id]: value,
    validPassword: password.length >= NUM_MAGIC,
    })
  }

  render() {
    const { email, password, validPassword, validEmail } = this.state
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" value={email} onChange={this.handleValidEmail} data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha:
          <input id="password" type="password" value={password} onChange={this.handleValidPassword}data-testid="password-input" />
        </label>
        <Link to="/carteira">
          <button type="button" disabled={ !validEmail || !validPassword  } > Entrar</button>
          
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({

})
export default Login;

// Agradecimentos A Alessandra Razende  Turma 10 Tribo b - e ao Instrutor Eduardo Santos
