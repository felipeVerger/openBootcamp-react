import React from 'react'
import { ContactType } from '../../models/contact.class';
import Contact from '../pure/Contact';


const ContactList = () => {

  const defaultContact = new ContactType("Felipe", "Verger", "fverger@gmail.com", false);

  const changeState = (id) => {
    console.log('Cambiar estado de una tarea');
  }

  return (
    <div>
        <div>
            Your Tasks:
        </div>
        <Contact contact={defaultContact}/>
    </div>
  )
}

export default ContactList
