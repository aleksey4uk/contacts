import React from 'react';
import ReactDOM from 'react-dom';
import {SwapiServiceProvider} from './components/swapi-service-context';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import swapiService from  './services/swapi-service';
import { store } from './store';
import App from './components/app'

let SwapiService = new swapiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SwapiServiceProvider value={SwapiService}>
        <Router>
          <App/>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
