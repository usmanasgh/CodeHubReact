import React from 'react';

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
const pakistan = () => {
    return <div><h5>Paksitan Zindabad!</h5></div>
};
// MUA: I am not able to call the above function from other class.


const person = (Property) => {
    return <div>
        <p>My name: {Property.name} and age is {Property.age} </p>
        <p>{Property.children}</p>
    </div>  
};

export default person; // MUA: component/function wont' work without export function.