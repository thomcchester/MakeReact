import React, { Component } from 'react';
import {Router, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Home = React.createClass({})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Makeup By Kryssa</h2>
        </div>
        <div className="Side-Bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>kNotes</li>
            <li>kVids</li>
            <li>links</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
