import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator'

class App extends Component{
  constructor() {
    super();

    this.state = {
      total: 0,
    }
  }


  handleClick = (e) => {
    console.log(e)
  }

  clear() {
    this.setState({total: 0})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Beep bop.
        </header>

        <div>
          <Calculator
            total={this.state.total}
            onClick={this.handleClick}
            />
        </div>
      </div>
    );
  }
}

export default App;
