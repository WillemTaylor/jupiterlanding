/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Live extends Component {
  render() {
    return (
      <a name="live">
        <div className="live">
          <h1>LIVE</h1>
          <div className="gigs-row">
            <div>18/01/2019</div>
            <div>AATMA</div>
            <div>
              MANCHESTER,
              <br />
              UK
            </div>
          </div>
        </div>
      </a>
    );
  }
}
