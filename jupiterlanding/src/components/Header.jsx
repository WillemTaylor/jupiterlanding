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
      <div className="header">
        <div class="dropdown">
          <p onClick={this.clickDropdown} className="dropbtn">
            <div className="dropbtn" />
            <div className="dropbtn" />
            <div className="dropbtn" />
          </p>

          {this.state.dropdownContent && (
            <div className="dropdown-content">
              <p class="pj">Home</p>
              <p class="pj">News</p>
              <p class="pj">Live</p>
              <p class="pj">Videos</p>
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
    );
  }

  clickDropdown = event => {
    const currentState = this.state.dropdownContent;
    this.setState({ dropdownContent: !currentState });
  };
}
