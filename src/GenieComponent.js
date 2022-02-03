//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

//MUA: Calling Genie in the form of class, Extending react component.s
class GenieComponent extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className='Genie'>Test application</h1>

        </header>
      </div>
    );
  }
}

//MUA: Wrap all html element within one main root element.

export default GenieComponent;
