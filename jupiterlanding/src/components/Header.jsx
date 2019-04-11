import React, { Component } from 'react';
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import yt from '../img/yt.png';

export default class Header extends Component {
  state = {
    dropdownContent: false
  };

  render() {
    return (
      <a name="home">
        <div className="header">
          <div class="dropdown" onClick={this.clickDropdown}>
            <div className="dropbtn1">
              <p className="dropbtn">
                <div className="dropbtn" />
                <div className="dropbtn" />
                <div className="dropbtn" />
              </p>
            </div>
            {this.state.dropdownContent && (
              <div className="dropdown-content">
                <p href="#home">Home</p>
                <p href="#news">News</p>
                <p href="#live">Live</p>
                <p href="#social">Social</p>
              </div>
            )}
          </div>
          <h1 className="title">J//L</h1>
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
      </a>
    );
  }

  clickDropdown = event => {
    const currentState = this.state.dropdownContent;
    this.setState({ dropdownContent: !currentState });
  };
}
