function Person(name, age) 
{ this.name = name; 
    this.age = age; 
    this.greet = function() { 
        console.log("Hello, my name is " + this.name
        ); }; }
    
const person2 = new Person("Bob", 25);

console.log(person2.name); // Output: Bob
console.log(typeof(person2));
person2.greet(); // Output: Hello, my name is Bob
 