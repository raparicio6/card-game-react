import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './app';
import './config/i18n';
import { client } from './config/apollo';
import './scss/application.scss';
import { register } from './serviceWorker';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
