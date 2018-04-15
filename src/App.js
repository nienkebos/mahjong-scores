import React from 'react';
import firebase from './firebase';
import img from './img/total.jpg';
import './App.css';
import  Header from './Header/Header.js';
import  GameRack from './Game/GameRack.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      wind: '',
    }
    this.dbRef = firebase.database().ref('/tiles');
    this.selectWind = this.selectWind.bind(this);
  }

  componentDidMount() {
    this.dbRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }

  selectWind(wind) {
    this.setState({wind})
  }

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
          <Header onWindChange={this.selectWind}/>
        </div>
        <div className="App-game">
          <GameRack />
        </div>
      </div>
    );
  }
}

export default App;
