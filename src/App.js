import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Heena</h1>
        </header>
        <p className="App-intro">
          This is my first Beanstalk docker app on React of using Travis
        </p>
      </div>
    );
  }
}

export default App;
