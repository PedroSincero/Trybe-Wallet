import React from 'react';

export default function Button({ handleClick }) {
  return (
    <button type="button" onClick={ handleClick }>
      Adicionar despesa
    </button>
  );
}
