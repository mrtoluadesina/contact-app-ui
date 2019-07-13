import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

import user from '../user.svg';
import Button from './Button';
import Nav from './Nav';

const Contact = styled.li`
  padding: .6rem .4rem;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: unset;
`;

export default function Contacts() {
  const [ contacts, setContacts ] = useState([])

  useEffect(() => {
    axios.get('/api/contacts').then(data => setContacts(data.data))
  }, [])
  return (
    <>
      <Nav />
      <ul className="contacts-list">
        {contacts.map((contact, index) => (
          <Contact className="contacts-item" key={index}>
            <div className="contact-section">
              <img src={user} alt={contact.name} />
              <h3>
                {contact.name}
                {contact.isBlocked ? <small>BLOCKED</small> : ''}
              </h3>
            </div>
            <div className="contact-section">
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
          </Contact>
        ))}
      </ul>
      <Button value={faPlus} />
    </>
  )
}