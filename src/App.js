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
/* class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Building up Codehub React App.
          </p>
          
          <person/>
          <Person name="Humayun" age="20"/>
          <Person name="Adnan" age="10"/>
          <Person name="Genie" age="8">My Best Friend.</Person>
        </header>
      </div>
    );
  }
} */

//MUA: state is keyword in React, holds the properties and their values.
class App extends Component {
  state = {
    persons: [
        {name:'Adnan', age:10},
        {name: 'Humayun', age:20},
        {name: 'genie', age:8}
    ]
}
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Building up Codehub React App.
          </p>
          
          <button>Update Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Best Friend.</Person>
        </header>
      </div>
    );
  }
}
//MUA: Calling different component within current component..

export default App;
