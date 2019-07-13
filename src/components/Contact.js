import React from 'react';

export default function Contact({ location }) {
  const {name, phone} = location.state;
  return (
    <section>
      {name}
      {phone}
    </section>
  )
}