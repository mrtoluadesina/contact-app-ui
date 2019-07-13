import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


import Nav from './Nav';
import Button from './Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const LUKE = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

export default function Blocked() {
  return (
    <>
      <Nav />
      <h2>This is Names list</h2>
      <Query query={LUKE} errorPolicy="all" >
        {({ data, error, loading }) => 
          loading ? (
            <span>I am loading ... </span>
          ) : (
            data.person.name
          )
        }
      </Query>
      <Button value={faPlus} />
    </>
  )
}