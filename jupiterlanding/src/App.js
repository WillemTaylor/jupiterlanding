import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MusicVideo from './components/youtube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="bg" />
        <div className="content">
          <Header />
          <MusicVideo />
        </div>
      </div>
    );
  }
}

export default App;
