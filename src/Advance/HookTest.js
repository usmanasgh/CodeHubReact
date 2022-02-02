import logo from '../logo.svg';
import '../App.css';
import React, { useState } from 'react';
import Person from '../Person/Person';

const HookTest = props => {
  
    const [ personState, setPersonsState ] = useState({
        persons: [
            {name:'Adnan', age:10},
            {name: 'Humayun', age:20},
            {name: 'genie', age:8}
        ], //Next state is optional, use 'comma' to add more states.
        otherState : 'some other value'
    });


    const switchNameHandler = () => {
        //console.log('Clicked');
        // DON'T DO THIS: this.state.persons[0].name = "Usman";
      
        setPersonsState({
          persons: [
            {name:'Adnan Akhtar', age:10},
            {name: 'Humayun Asghar', age:20},
            {name: 'Usman Asghar', age:32}
        ]
        });
      }
    
    return (
      <div className="App">

          <h1>Hello React, I am testing here</h1>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p> Building up Codehub React App.</p>
          
          <button onClick={switchNameHandler}>Update Name</button>

          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}>My Best Friend.</Person>

        </header>

      </div>

    );
  }

//MUA: Calling different component within current component.

export default HookTest;
