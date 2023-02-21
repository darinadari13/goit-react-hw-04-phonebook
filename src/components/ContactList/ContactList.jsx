import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact = () => {} }) => {
  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
              {...contact}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
