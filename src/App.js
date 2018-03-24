import React, { Component } from 'react';
import img from './img/total.jpg';
import './App.css';
import  Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="" />
          <h1 className="App-title">Mah-Jong Scores</h1>
        </header>
        <p className="App-intro">
          Calculate your scores :)
        </p>
        <Header />
      </div>
    );
  }
}

export default App;
