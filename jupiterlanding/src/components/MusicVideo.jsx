/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class MusicVideo extends Component {
  render() {
    return (
      <a name="home">
        <div className="videoplayer">
          <iframe
            title="musicvideo"
            width="966"
            height="530"
            src="https://www.youtube.com/embed/YEuxoYxbSsc?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h1>STORMY WEATHER</h1>
        </div>
      </a>
    );
  }
}
