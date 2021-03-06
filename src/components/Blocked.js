import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


import Nav from './Nav';
import Button from './Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const GET_BLOCKED = gql`
  query blocked {
    blocked @rest(type: "Blocked", path: "contacts/") {
      name
      phone
      email
      isBlocked
    }
  }
`;

export default function Blocked() {
  return (
    <>
      <Nav />
      <h2>This is Names list</h2>
      <Query query={GET_BLOCKED} errorPolicy="all" >
        {({ data, error, loading }) => 
          loading ? (
            <span>I am loading ... </span>
          ) : (
            <>
              {data.blocked.map(item => (
                item.name
              ))}
            </>
          )
        }
      </Query>
      <Button value={faPlus} />
    </>
  )
}