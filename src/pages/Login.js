import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha:
          <input id="password" type="password" data-testid="password-input" />
        </label>
        <Link to="/">
          <button type="button"> Entrar</button>
        </Link>
      </form>
    );
  }
}

export default Login;
