import {
  List,
  ListItem,
  ListItemText,
  ListItemBtn,
} from './ContactList.styled';

const ContactList = ({ renderItems, onDelitBtn }) => {
  return (
    <>
      <h2>Contacts</h2>
      <List>
        {renderItems.map(({ name, number, id }) => (
          <ListItem key={id}>
            <ListItemText>
              {name}: {number}
            </ListItemText>
            <ListItemBtn type="button" onClick={() => onDelitBtn(id)}>
              Delet
            </ListItemBtn>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
