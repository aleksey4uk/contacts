import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login';
import HomePage from '../pages/home';
import Contacts from '../contacts';
import './app.css'

const App = (props) => {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App;
