import React from 'react';
import ContactPerson from 'components/ContactPerson/ContactPerson';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactPerson
        key={contact.id}
        contact={contact}
        onDelete={() => onDeleteContact(contact.id)}
      />
    ))}
  </ul>
);

export default ContactList;
