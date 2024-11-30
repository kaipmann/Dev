const { describe } = require("node:test");

const oCircle = {
    radius : 2,
    area : function() {
        console.log('Area is ' + 3.14 * this.radius );
        console.log('oCircle is ' + typeof(oCircle)); // type of literal?
        console.log('this is ', this ); // what is in this object?
    }
};

oCircle.area();

var oPer = { 
    familyName: 'Ron',
    age: 30,
    identity: function() {
        console.log(this.familyName + ' is ' + this.age + ' old');
    }
};

oPer.identity();

var oPerson = {
    firstName: 'Sam',
    describe : function() {
        console.log('name: ' + this.firstName );
    }
};
oPerson.describe();
