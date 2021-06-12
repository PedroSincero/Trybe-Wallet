import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={ handleClick }>
      Adicionar despesa
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
