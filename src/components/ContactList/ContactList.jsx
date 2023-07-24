import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

import { List, ListItem, Button } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredName = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        {contacts &&
          filteredName.map(({ name, id, phone }) => {
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
