import React from 'react';
//import Switch and Route
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
//import components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="app">
      <Link to="/login">Login</Link>
      <Link to="/friendslist">View Friends</Link>
      <Switch>
        <PrivateRoute path="/friendslist" component={FriendsList}/>
        <Route path="/login" render={(props) => (
          <Login {...props} history={History}/>
        )}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
