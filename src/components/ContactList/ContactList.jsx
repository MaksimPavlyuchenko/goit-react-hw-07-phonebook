import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';

import { List, ListItem, Button } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredName = () => {
    const filterLower = filter.toLowerCase();
    if (contacts) {
      const filteredName = contacts.filter(({ name }) => {
        return name.toLowerCase().trim().includes(filterLower);
      });
      return filteredName;
    }
  };

  return (
    <>
      <List>
        {contacts &&
          filteredName().map(({ name, id, phone }) => {
            return (
              <ListItem key={id}>
                {name}: {phone}{' '}
                <Button
                  type="button"
                  id={id}
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};
export default ContactList;
