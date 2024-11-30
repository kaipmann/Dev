// Named function
function sayHello(){
    console.log('Hello');
    }
sayHello();


// parameters and arguments
function sayHello(parameter){
    console.log('Hello ' + parameter);
    }
sayHello('argument');



// hoisting
sayHello();
function sayHello(){
    console.log('Hello Hoisted');
    }

// call a function as an argument of another function
    function sayHello(parameter){
        return 'Hello ' + parameter;
        }
    console.log(sayHello('argument'));

//anonymous function
const sayHello = function() {
     console.log('Hello Anonymous');
};
sayHello();

//arrow function
const sayHello = () => {
    console.log('Hello Anonymous Arrow Fn');
};
sayHello();

// return statement
const sayHello = (arrow) => {
    return 'Hello Anonymous ' + arrow;
};
console.log(sayHello('Arrow Fn'));
