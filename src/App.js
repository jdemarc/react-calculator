import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator'

class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      total: '',
    }
  }


  handleInput = (e) => {
    if (e === 'c') {
      this.clear();
    } else if (e === '=') {
      this.evaluate();
    } else {
      this.setState({
        total: this.state.total + e
      })
    }
  }

  clear = () => {
    this.setState({
      total: '',
    })
  }

  evaluate = () => {
    this.setState({
      total: eval(this.state.total)
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          Beep bop.
        </header>
        <div>
          <Calculator
            total={this.state.total}
            onInput={this.handleInput}
            />
        </div>
      </div>
    );
  }
}

export default App;
