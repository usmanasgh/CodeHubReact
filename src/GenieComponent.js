import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//MUA: Calling Genie in the form of class, Extending react component.s
class GenieComponent extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Testing Genie Component</p>
          <p>Pass Genie coponent from 'index.js' to see the results.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//MUA: Wrap all html element within one main root element.

export default GenieComponent;
