import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts: storedContacts });
  }
  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    );
  };

  deleteContact = contactId => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      }),
      () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    );
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
