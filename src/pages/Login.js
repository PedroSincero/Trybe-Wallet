import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import saveUser from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };

    this.handleValidEmail = this.handleValidEmail.bind(this);
    this.handleValidPassword = this.handleValidPassword.bind(this);
  }

  handleValidEmail(event) {
    const { target: { value, id } } = event;
    const { email } = this.state;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    this.setState({
      [id]: value,
      validEmail: regex.test(email),
    });
  }

  handleValidPassword(event) {
    const { target: { value, id } } = event;
    const { password } = this.state;
    const NUM_MAGIC = 5;

    this.setState({
      [id]: value,
      validPassword: password.length >= NUM_MAGIC,
    });
  }

  render() {
    const { email, password, validPassword, validEmail } = this.state;
    const { saveEmail } = this.props;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            value={ email }
            onChange={ this.handleValidEmail }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            value={ password }
            onChange={ this.handleValidPassword }
            data-testid="password-input"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validEmail || !validPassword }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>

        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveUser(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Agradecimentos A Alessandra Razende  Turma 10 Tribo b - e ao Instrutor Eduardo Santos , Raphael Gumieri Turma 10 Tribo B - Lucas Martins Turma 10 Tribo B
