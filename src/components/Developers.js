
import React, { Component } from 'react';
import Developer from './Developer';
import "./developers.css";

class Developers extends Component {
  render() {
    return (
      <div className="container">
        <Developer name='Stuart' />
        <Developer name='Tom' />
        <Developer name='Arunsies' />
        <Developer name='Abdul' />
      </div>
    )
  }
}

export default Developers;
