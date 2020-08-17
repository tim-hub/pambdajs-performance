import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import { Home } from './pages/Home';
import { ChartPage } from './pages/ChartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/:key">
          <ChartPage/>
        </Route>
        <Route component={
          () => (
            <>
              <h1>404</h1>
            </>
          )
        }/>
      </Switch>

    </Router>
  );
}

export default App;
