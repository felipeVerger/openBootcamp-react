import React from 'react';
import PropTypes from 'prop-types';
import { ContactType } from '../../models/contact.class';

const Contact = ({ contact }) => {
  return (
    <div>
        <h2>Name: {contact.name}</h2>
        <h3>LastName: {contact.lastName}</h3>
        <h4>Email: {contact.email}</h4>
        <h5>This user is: {contact.connected ? 'COMPLETED' : 'PENDING'}</h5>
    </div>
  );
};

Contact.propTypes = {
    contact: PropTypes.instanceOf(ContactType)
};

export default Contact;