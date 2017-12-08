import React, { Component } from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
          {/*<Layout>*/}
              {/*<BurgerBuilder/>*/}
          {/*</Layout>*/}
          <Main/>
      </div>
    );
  }
}

export default App;
