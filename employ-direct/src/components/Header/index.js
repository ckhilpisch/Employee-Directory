import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header header-dark">
        <h1>Employee Directory</h1>
        <p>Use the search box to narrow your search</p>
      </div>
    )
  }
}