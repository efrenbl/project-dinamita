import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import About from '../containers/About';
import NotFound from '../containers/NotFound';
import Category from '../containers/Category';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/category' component={Category} />
      <Route exact path='/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
