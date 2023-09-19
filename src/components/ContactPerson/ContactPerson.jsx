import React from 'react';
import { ButtonStyle, Item } from './ContactPerson.styled';

const ContactPerson = ({ contact, onDelete }) => (
  <Item>
    {contact.name}: {contact.number}
    <ButtonStyle type="button" onClick={onDelete}>
      Delete
    </ButtonStyle>
  </Item>
);

export default ContactPerson;
