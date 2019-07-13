import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function EditContact({ location }) {
  const { _id: id, name, phone, email, isBlocked } = location.state;
  const [ values, setValues ] = useState({
    name,
    phone,
    email,
    isBlocked
  });

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`/api/contact/${id}`, values)
         .then(() => navigate('/'))
         .catch(() => console.log('Nothing Here!'))

    setValues('')
  }

  return (
    <>
      <h3>Edit a contact</h3>
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
            Update Contact
          </button>
        </div>
      </form>
    </>
  )
}