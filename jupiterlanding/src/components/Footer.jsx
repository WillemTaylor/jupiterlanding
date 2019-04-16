import React, { Component } from 'react';
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import yt from '../img/yt.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <a href="#home">HOME</a>
          <a href="#news">NEWS</a>
          <a href="#live">LIVE</a>
          <a href="#social">SOCIAL</a>
        </div>
        <div className="social1">
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
        <h2>JUPITER LANDING</h2>
        <a
          className="portfolio"
          href="https://willemtaylor.github.io"
          target="_blank"
        >
          Willem Taylor
        </a>
      </div>
    );
  }
}
