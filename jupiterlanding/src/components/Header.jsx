import React, { Component } from 'react';
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import yt from '../img/yt.png';
import logo from '../img/logo.png';

export default class Header extends Component {
  state = {
    dropdownContent: false
  };

  render() {
    return (
      <div className="header">
        <div class="dropdown">
          <div className="dropbtn1" onClick={this.clickDropdown}>
            <p className="dropbtn">
              <div className="dropbtn" />
              <div className="dropbtn" />
              <div className="dropbtn" />
            </p>
          </div>
          {this.state.dropdownContent && (
            <div className="dropdown-content">
              <a href="#home">Home</a>
              <a href="#news">News</a>
              <a href="#live">Live</a>
              <a href="#social">Social</a>
            </div>
          )}
        </div>
        <img className="title" src={logo} />
        <div className="social">
          <a
            href="https://www.facebook.com/wearejupiterlanding/"
            target="_blank"
          >
            <img className="fb" src={fb} />
          </a>
          <a
            href="https://www.instagram.com/wearejupiterlanding/"
            target="_blank"
          >
            <img className="insta" src={insta} />
          </a>
          <a
            href="https://www.facebook.com/wearejupiterlanding/"
            target="_blank"
          >
            <img className="yt" src={yt} />
          </a>
        </div>
      </div>
    );
  }

  clickDropdown = event => {
    const currentState = this.state.dropdownContent;
    this.setState({ dropdownContent: !currentState });
  };
}
