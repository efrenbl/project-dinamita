import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import About from '../containers/About';
import CategorySlug from '../containers/CategorySlug';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import ContentNew from '../containers/ContentNew';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        <Route exact path='/:category' component={CategorySlug} />
        <Route exact path='/:category/:id' component={ContentNew} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
