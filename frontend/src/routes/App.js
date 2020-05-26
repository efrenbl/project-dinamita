import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import About from '../containers/About';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/about' component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
