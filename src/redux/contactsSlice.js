import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  handlerDeleteFullfilled,
  handlerAddFullfilled,
  handlerFetchFulfilled,
  handlerFullfilled,
  handlerPending,
  handlerRejected,
} from './helpers';

const arrayActionType = [fetchContacts, addContact, deleteContact];

const findActionType = status => {
  return arrayActionType.map(actionType => actionType[status]);
};

const fetchStatus = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = fetchStatus;
    builder
      .addCase(fetchContacts.fulfilled, handlerFetchFulfilled)
      .addCase(addContact.fulfilled, handlerAddFullfilled)
      .addCase(deleteContact.fulfilled, handlerDeleteFullfilled)
      .addMatcher(isAnyOf(...findActionType(PENDING)), handlerPending)
      .addMatcher(isAnyOf(...findActionType(FULFILLED)), handlerFullfilled)
      .addMatcher(isAnyOf(...findActionType(REJECTED)), handlerRejected);
  },
});

export const contactReduser = contactSlice.reducer;
