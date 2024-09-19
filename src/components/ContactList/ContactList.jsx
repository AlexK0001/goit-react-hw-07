import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import contactsData from '../../contacts.json';
import { selectNameFilter } from '../../redux/filtersSlice'

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact 
          key={contact.id} 
          id={contact.id} 
          name={contact.name} 
          phone={contact.phone} 
          {...contactsData}
        />
      ))}
    </ul>
  );
};

export default ContactList;
