import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import About from '../containers/About';
import Nacional from '../containers/Nacional';
import NotFound from '../containers/NotFound';
import Internacional from '../containers/Internacional';
import Deportes from '../containers/Deportes';
import Espectaculos from '../containers/Espectaculos';
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
        <Route exact path='/internacional' component={Internacional} />
        <Route exact path='/nacional' component={Nacional} />
        <Route exact path='/deportes' component={Deportes} />
        <Route exact path='/espectaculos' component={Espectaculos} />
        <Route exact path='/ContentNew' component={ContentNew} />
        <Route component={NotFound} />
      </Switch>
    </Layout>

  </BrowserRouter>
);

export default App;
