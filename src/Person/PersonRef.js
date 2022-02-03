import React from 'react';
import './Person.css';

//MUA: ES6 code - Advance features of Javascript.

/* function ConventionalJavascriptStyle() {
    return <div>
        write your own html here.
    </div>;
}

var ES5Syntax = function ES5() {
    return <div>
        write your own html here.
    </div>;
} */


/* const person = () => {
    return <div>
        <p>Randome Number: {Math.floor(Math.random() * 30)}</p>
    </div>
    
}; */

//MUA: Remember anything between the tags will be treated as children. <Person>Children</Person>

// MUA: How to have multiple components or functions in same page????????????????????
// MUA: I am not able to call the above function from other class.

//MUA : This is stateless component
const personRef = (props) => {
    return <div className='Person'>
        <p onClick={props.click}>My name: {props.name} and age is {props.age} </p>
        <p>{props.children}</p>

        {/* This is called two way binding */}
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>  
};

export default personRef; // MUA: component/function wont' work without export function.