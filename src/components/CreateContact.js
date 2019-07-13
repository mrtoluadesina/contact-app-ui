import React, { useState } from 'react';
import { navigate } from '@reach/router';

import Button from './Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function CreateContact() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      ...values,
      isBlocked: false
    }

    // SEND TO SERVER
    axios.post('/api/contacts', newContact)
         .then(() => navigate('/'))
         .catch(() => console.log('I am still here, I no go anywhere'))

    setValues('')
  }

  return (
    <>
      <h3>Create A Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="input-field"
            placeholder="Full Name"
            type="text"
            name="name"
            value={values.name}
            formNoValidate
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-field"
            placeholder="Phone Number"
            type="text"
            name="phone"
            value={values.phone}
            formNoValidate
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="input-field"
            placeholder="Email Address"
            type="email"
            name="email"
            value={values.email}
            formNoValidate
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn mt-0">
            Create Contact
          </button>
        </div>
      </form>
      <Button value={faArrowRight} type="submit" />
    </>
  )
}