import React, { Component } from 'react';
import './App.css';

import Aux from './hoc/Aux_';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Aux>
              <BurgerBuilder />
          </Aux>
      </div>
    );
  }
}

export default App;
