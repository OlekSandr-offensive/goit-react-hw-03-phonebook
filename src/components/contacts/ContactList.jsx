import './ContactList.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
        <button type="button" onClick={() => onDeleteContacts(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
