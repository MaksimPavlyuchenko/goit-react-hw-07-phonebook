import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReduser,
  },
});
export default store;
