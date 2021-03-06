import React from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

import Header from './components/Header';
import Contacts from './components/Contacts';
import Blocked from './components/Blocked';
import CreateContact from './components/CreateContact';
import Contact from './components/Contact';
import EditContact from './components/EditContact';

import './App.css';

const restLink = new RestLink({ uri: "http://localhost:3500/api/" });


// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Router>
          <Contacts path="/" />
          <Contact path="/contact/:id" />
          <EditContact path="/edit/:id" />
          <Blocked path="/blocked" />
          <CreateContact path="/create-contact" />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
