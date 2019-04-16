import React, { Component } from 'react';

export default class MusicVideo extends Component {
  render() {
    return (
      <a name="home">
        <div className="videoplayer">
          <iframe
            width="966"
            height="530"
            src="https://www.youtube.com/embed/Ob41MD_Fqrs?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <h1>STORMY WEATHER</h1>
        </div>
      </a>
    );
  }
}
