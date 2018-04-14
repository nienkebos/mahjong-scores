import React from 'react';
import database from './firebase';
import img from './img/total.jpg';
import './App.css';
import  Header from './Header/Header.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="" />
          <div>
            <h1 className="App-title">Mah-Jong Scores</h1>
            <div>Calculate your scores :)</div>
          </div>
        </header>
        <div className="App-intro">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
