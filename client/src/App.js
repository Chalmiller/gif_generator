import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gifs from './components/Gifs'
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/" component={Gifs} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
