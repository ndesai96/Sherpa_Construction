import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";

class App extends Component {

  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <main></main>
      </div>
    );
  }
}

export default App;
