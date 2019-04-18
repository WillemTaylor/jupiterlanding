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
        <div className="dropdown">
          <div className="dropbtn1" onClick={this.clickDropdown}>
            <div className="dropbtn">
              <p className="dropbtn" />
              <p className="dropbtn" />
              <p className="dropbtn" />
            </div>
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
        <img className="title" src={logo} alt="" />
        <div className="social">
          <a
            href="https://www.facebook.com/wearejupiterlanding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fb" src={fb} alt="" />
          </a>
          <a
            href="https://www.instagram.com/wearejupiterlanding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="insta" src={insta} alt="" />
          </a>
          <a
            href="https://www.facebook.com/wearejupiterlanding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="yt" src={yt} alt="" />
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
