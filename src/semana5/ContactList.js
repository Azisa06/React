import './ContactList.css';

export default function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {
  return (
    <section className="semana5-contact-list">
      <ul className="semana5-contact-list-ul">
        {contacts.map(contact =>
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
              className={`semana5-contact-button ${selectedContact.email === contact.email ? 'semana5-selected' : ''}`}
            >
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}