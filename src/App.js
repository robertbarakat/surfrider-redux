import React, { Component } from 'react';
import MarineLitter from './containers/MarineLitter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ocean Cleaner!</h1>
        <MarineLitter />
      </div>
    );
  }
}

export default App;
