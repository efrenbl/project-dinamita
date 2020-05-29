import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import About from '../containers/About';
import Nacional from '../containers/Nacional';
import NotFound from '../containers/NotFound';
import Internacional from '../containers/Internacional';
import Deportes from '../containers/Deportes';
import Espectaculos from '../containers/Espectaculos';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/internacional' component={Internacional} />
      <Route exact path='/about' component={About} />
      <Route exact path='/nacional' component={Nacional} />
      <Route exact path='/Deportes' component={Deportes} />
      <Route exact path='/Espectaculos' component={Espectaculos} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
