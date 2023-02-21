import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact = () => {} }) => {
  return (
    <li className={css.listItem} key={id}>
      {name}: {number}
      <button
        className={css.deleteBtn}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
