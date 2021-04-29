import React, { Component } from 'react';
import "../Header/style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header header-dark">
        <h1>Employee Directory</h1>
        <br></br>
        <p>**Use the search box to narrow your search by name**</p>
        <p>**Click the arrow to the right of the column title to sort ascending or descending**</p>
      </div>
    )
  }
}