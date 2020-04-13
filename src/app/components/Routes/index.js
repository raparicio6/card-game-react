import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Routes } from '../../constants';
import Home from '../../screens/Home';
import Game from '../../screens/Game';
import Result from '../../screens/Result';

import Route from './components/Route';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.GAME} component={Game} />
        <Route path={Routes.RESULT} component={Result} />
        <Route exact path={Routes.HOME} component={Home} />
        <Redirect to={Routes.HOME} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
