import React, { Component } from 'react';

export default class MusicVideo extends Component {
  render() {
    return (
      <div className="videoplayer">
        <iframe
          width="996"
          height="560"
          src="https://www.youtube.com/embed/Ob41MD_Fqrs?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <h1>STORMY WEATHER</h1>
      </div>
    );
  }
}
