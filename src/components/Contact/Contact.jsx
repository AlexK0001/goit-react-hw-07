// import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {phone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
