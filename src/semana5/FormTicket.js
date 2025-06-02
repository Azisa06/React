import { useState } from 'react';
import './FormTicket.css';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // fullName é calculado durante a renderização, não é um estado separado.
  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="semana5-ticket-container">
      <h2 className="semana5-ticket-title">Vamos fazer seu check-in</h2>
      <label className="semana5-ticket-label">
        Primeiro nome:{' '}
        <input
          className="semana5-ticket-input"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label className="semana5-ticket-label">
        Sobrenome:{' '}
        <input
          className="semana5-ticket-input"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p className="semana5-ticket-info">
        Seu ingresso será emitido para: <b className="semana5-ticket-fullname">{fullName}</b>
      </p>
    </div>
  );
}