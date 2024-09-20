import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

// export const selectVisibleContacts = createSelector(
//   [ selectContacts, selectFilter],
//    (contacts, filter) => {
//      return contacts.filter(contact => contact.name.toLowerCase()
//       .includes(filter.toLowerCase()))
//    }
//   )

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
);

const initialState ={
  contacts: {
   items: [],
   loading: false,
   error: null
   },
   filters: {
      name: ""
    }
  }
  

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload);
      state.loading = false;
    })
    .addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(
        (contacts) => contacts.id !== action.payload.id
      );
      state.loading = false;
    })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  }
});


// export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;
