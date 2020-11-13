import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Building Codehub React App</p>
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
} */

//MUA: Calling Genie in the form of class, Extending react component.
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Building up Codehub React App.
          </p>
          <Person/>
          <Person/>
          <Person/>
        </header>
      </div>
    );
  }
}
//MUA: Calling different component within current component.

export default App;
