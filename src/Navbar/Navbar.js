import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div />
        <a className="navbar-brand" href="">
          Reactive Blog
        </a>
        <div />
      </nav>
    );
  }
}

export default Navbar;