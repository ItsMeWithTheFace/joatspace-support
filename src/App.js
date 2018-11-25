import React, { Component } from 'react';
import NavInstance from "./components/NavInstance";
import Support from "./components/Support";
import './App.css';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <NavInstance/>
        <Support/>
      </div>
    );
  }
}

export default App;
