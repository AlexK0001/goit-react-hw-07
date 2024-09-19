import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'



export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onChange={handleSearchChange} />
      <ContactList  onDeleteContact={deleteContact} contacts={filteredContacts}/>
    </div>

  )
}
