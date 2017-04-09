import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title-container">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>yaraondev.me</h2>
          </div>
        </div>
        <Posts />
      </div>
    );
  }
}

export default App;
