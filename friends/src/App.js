import React from 'react';
//import Switch and Route
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
//import components
import Login from './components/Login';
//import reducer
import {reducer} from './reducers';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//create store
export const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="app">
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
