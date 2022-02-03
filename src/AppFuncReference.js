
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/PersonRef';
//import Gen from './GenieJSX'


// Part 1.
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

// Part 2.
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


// Part 3.
//MUA: state is keyword in React, holds the properties and their values.

class AppFuncReference extends Component {
  
  state = {
    persons: [
        {name:'Adnan', age:10},
        {name: 'Humayun', age:20},
        {name: 'genie', age:8}
    ], //Next state is optional, use 'comma' to add more states.
    otherState : 'some other state'
}

switchNameHandler = (Newname) => {
  
  //console.log('Clicked');
  // DON'T DO THIS: this.state.persons[0].name = "Usman";
  //MUA: Below component is statefull component

  this.setState({
    persons: [
      {name: Newname, age:10},
      {name: 'Humayun Asghar', age:20},
      {name: 'Usman Asghar', age:32}
  ]
  })
}

nameChangeHandler = (event) => {
 
  this.setState({
    persons: [
      {name: 'Roham Usman', age:10},
      {name: event.target.value, age:20},
      {name: 'Usman Asghar', age:32}
  ]
  })
}

  render(){

    const mystyle = {
      backgroundColor : 'white',
      color : 'blue',
      font : 'inherit',
      fontSize : '14px',
      border : '2px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    return (
      <div className="App">

          <h1>Hello React, I am testing here</h1>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p> Building up Codehub React App.</p>
          
          <button style={mystyle} onClick={this.switchNameHandler.bind(this, "Roham Usman")}>Update Name</button>

          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Human")}
          changed={this.nameChangeHandler}>My Hobbies : Racing</Person>

          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Best Friend.</Person>

        </header>

      </div>

    );
  }
}

//MUA: Calling different component within current component.

export default AppFuncReference;
