//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// import validator from 'validator';
// //we install validator module and we can use its built-in methods
// console.log(validator.isEmail('test@gmail.com'));

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))

class OldSyntax {
    constructor(){
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi My name is ${this.name}.`
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax { 
    constructor(){
        this.name = 'Jen'
    }
    getGreeting = () => {
        return `Hi My name is ${this.name}.`
    }
}

const newSyntax = new NewSyntax();
console.log(newSyntax.getGreeting());
