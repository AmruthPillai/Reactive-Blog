import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Blog from './Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Blog />
      </div>
    );
  }
}

export default App;
