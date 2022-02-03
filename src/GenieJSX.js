import React, { Component } from 'react';
//import App from './App';
import './App.css';

/* function GenieJSX() {
  return (
    <div className="App">
      <h1>Hi I am First Genie JSX Syntax in the APP?</h1>
      <h2>It is not JSX Syntax</h2>
    </div>
  );
} */

//MUA: Converting above JS Code into JSXs
/* class GenieJSX extends Component {
  render() {
    return React.createElement('div',null,'h1','Hi this is first JSX Syntax.');
  }
  
} */

//MUA: On the 2nd level, For making another HTML Element 'H1', need to call React.createElement();
/* class GenieJSX extends Component {
  render() {
    return React.createElement('div',null,React.createElement('h1',null,'Hi this is first JSX Syntax.'));
  }
} */

//MUA: On the 2nd level, For making another HTML Element 'H1', need to call React.createElement();
class GenieJSX extends Component {

//MUA: Test it later.
// TestFunction = () => {
//   return <div><h2>This is test Function from Genie class.</h2></div>
// }


  render() {
    return React.createElement('div',{className: 'Genie'},React.createElement('h1',null,'Hi this is first JSX Syntax.'));
  }
}

//MUA: React JSX (Javascript Extension: Should return one root element like <div>wrap everything including all other html elements inside.</div>)

export default GenieJSX;


