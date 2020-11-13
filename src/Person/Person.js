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


const person = () => {
    return <div>
        <p>Randome Number: {Math.floor(Math.random() * 30)}</p>
    </div>
    
};

export default person;