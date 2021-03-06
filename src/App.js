import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MusicVideo from './components/MusicVideo';
import News from './components/News';
import Live from './components/Live';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="bg" alt="" />
        <Logo />
        <div className="content">
          <Header />
          <MusicVideo />
          <News />
          <Live />
          <Instagram />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
