import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@reach/router';

export default function Button(props) {
  return (
    <Link to="/create-contact" type={props.type} className="add-contact">
        <FontAwesomeIcon icon={props.value} />
    </Link>
  )
}