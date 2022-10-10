import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Box } from '../../components/Box';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  addContact = (name, number) => {
    const addName = this.state.contacts.map(contact => contact.name);
    addName.includes(name);
    if (addName.includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findContactbyName = () => {
    const { filter, contacts } = this.state;
    const fiterNameToLowerCase = filter.toLowerCase();
    const findContactsbyName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(fiterNameToLowerCase)
    );

    return findContactsbyName;
  };

  deletContact = idx => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idx),
    }));
  };

  render() {
    const { filter } = this.state;
    const renderContactsList = this.findContactbyName();
    return (
      <Box display="flex">
        <Box
          marginLeft="auto"
          marginRight="auto"
          padding={4}
          border="phonebook"
          backgroundColor="phonebookBcg"
        >
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <Filter filter={filter} onChange={this.handleInputChange} />
          <ContactList
            renderItems={renderContactsList}
            onDelitBtn={this.deletContact}
          />
        </Box>
      </Box>
    );
  }
}
