import { useState } from 'react';
import './Chat.css';

export default function Chat({ contact }) {
  const [text, setText] = useState('');

  return (
    <section className="semana5-chat">
      <textarea
        value={text}
        placeholder={'Conversar com ' + contact.name}
        onChange={e => setText(e.target.value)}
        className="semana5-chat-textarea"
      />
      <br />
      <button className="semana5-chat-button">Enviar para {contact.email}</button>
    </section>
  );
}