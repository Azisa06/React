import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';
import './Messenger.css';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className="semana5-messenger-container">
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      {/*
        Usando a prop 'key' para forçar o componente Chat a ser recriado
        quando o contato muda. Isso redefine o estado interno do Chat (campo de texto).
      */}
      <Chat key={to.email} contact={to} />
    </div>
  );
}