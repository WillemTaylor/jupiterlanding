/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <h1>NEWS</h1>
        <div className="newstiles">
          <div className="tile">
            <a name="news" />
            <p className="date">11th April 2019</p>
            <h2>EP COMING SOON</h2>
          </div>
          <div className="tile2" />
          <div className="tile3" />
          <div className="tile4" />
        </div>
      </div>
    );
  }
}
