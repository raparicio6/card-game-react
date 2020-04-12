import React, { useReducer } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import '../scss/application.scss';
import { client } from '../config/apollo';
import { GlobalContext, globalReducer, globalState } from '../context';

import Routes from './components/Routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={useReducer(globalReducer, globalState)}>
        <Routes />
      </GlobalContext.Provider>
    </ApolloProvider>
  );
}

App.defaultProps = {
  loading: false
};

export default App;
