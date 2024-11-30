// line comment

/* block
of
comment */

// output a string
console.log('Hello World'); // statement terminated by a ;

// variable x
var x = 'Alex';
console.log(x);

// variable x type string
console.log(typeof(x)); // typeof operator

// identifer cannot be a reserved keyword
// identfier should be meaningful
// cannot start with a number (1name)
// cannot conatin space or hyphen
// camel notation
// are case sensitive

// variable name type string
var firstName = 'Ben';
console.log(firstName);
console.log(typeof(firstName));

// variable idA type string
var idA = '20'; // string literal
console.log(idA);
console.log(typeof(idA));

// variable age type number
var age = 20;
console.log(age);
console.log(typeof(age));

// variable idC type number
var idC = 20.24;
console.log(idC);
console.log(typeof(idC)); // there are only number no floats

// variable approveOrder type boolean
var approveOrder = true; // false
console.log(approveOrder);
console.log(typeof(approveOrder));

// variable idE type undefined
var middleName; 
console.log(middleName);
console.log(typeof(middleName));

// variable idF type null
var lastName = null; 
console.log(lastName);
console.log(typeof(lastName));

//concatenate
console.log('Hi ' + firstName + ' ' + middleName + ' ' + lastName);

//dynamic types - only at runtime the type of the variable is determined
console.log(firstName);
firstName = 'Asha';
console.log(firstName);
firstName = 10;
console.log(firstName);

// constant value remains same
const year = 2024;
console.log(year);
/* year = 2025;
console.log(year); */

//object person contains properties-value pairs that belong to same kind
var oPerson = { // {} object literal
    firstName: 'Ron',
    age: 30
};

console.log(oPerson);
console.log(typeof(oPerson));
// view a property of the object 
// dot notation
console.log(oPerson.age);

// change a value of a property in object 
oPerson.age = 40;
console.log(oPerson);

//Array - a collection of items
//[] - array literal
var aCar = ['Maruti', 'BMW'];
console.log(aCar);

//lenght of array aCar
console.log(aCar.length);

//first item in array
console.log(aCar[0]);

//replace item to end of array
aCar[aCar.length-1] = 'Tesla';
console.log(aCar);
console.log(aCar.length);

//append item to end of array
aCar[aCar.length] = 'Benz';
console.log(aCar);
console.log(aCar.length);

//insert item in 1st index location
aCar.splice(1,0,'MG');
console.log(aCar);
console.log(aCar.length);

// remove item at index 2 from array
aCar.splice(2,1);
console.log(aCar);
console.log(aCar.length);

//type of array?
console.log(typeof(aCar));



//Named Functions
//named function and its call 
function sayHello() {
    console.log('Hello World');
}

sayHello();


//named function with parameter and its call using argument
function sayHelloName(firstName) {
    console.log('Hello ' + firstName);
}

sayHelloName('Clare');

//multiple calls
sayHelloName('Phil'); 


//named function with multiple parameter and its call using argument
function sayHelloFullName(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}

sayHelloFullName('Clare');
sayHelloFullName('Phil', 'Murray'); 

//calculation
var square = function(number) {
    console.log(number*number);
}

square(2);

var square2 = function(number) {
    return number*number;
}
//calling a function from another function
console.log(square2(2));

// new synatx ARROW FUNCTION

sum = (num1,num2) => {
    return num1 + num2;
}
console.log(sum(10,40));


