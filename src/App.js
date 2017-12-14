import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route to='/checkout' component='Layout'></Route>
          <Route to='/' component='Layout'></Route>
        </Switch>
          <Layout>
              <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}

export default App;
