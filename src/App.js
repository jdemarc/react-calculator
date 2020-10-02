import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator'

class App extends Component{
  state = {
    total: null,
    operation: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Beep bop.
        </header>

        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
