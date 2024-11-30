/* var oPer = { 
    familyName: 'Ron',
    age: 30,
    identity: function() {
        console.log(this.familyName + ' is ' + this.age + ' old');
    }
};
oPer.identity(); */

//constructor function

function Person(familyName, age) {
    this.familyName = familyName,
    this.age = age,
    this.identity = function() {
        console.log(this.familyName + ' is ' + this.age + ' old');
    }
}

var sam = new Person('Sam', 30);
console.log(sam);
console.log(typeof(sam));
sam.identity();
