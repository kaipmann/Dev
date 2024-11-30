// object literal - definition
/* const oCircle = {
    radius : 2,
    area : function() {
        console.log('Area is ' + 3.14 * this.radius );
        console.log('oCircle is ' + typeof(oCircle)); // type of literal?
        console.log('this is ', this ); // what is in this object?
    }
};

oCircle.area(); */

// constructor function - definition
function Circle(radii) {
    console.log('top this type is ' + typeof(this));
    console.log('top this is ', this );
    this.radi = radii,
    this.areaFn = function() {
        console.log('Area is ' + 3.14 * this.radi );
        console.log('this type is ' + typeof(this));
        console.log('this is ', this );
    }
};

const shape = new Circle(3); // Top statements executed
console.log('shape is ' + typeof(shape));

console.log(this); // global this
console.log(typeof(this)); // global type of this
console.log(shape.radi); // object property
//console.log(shape.areaFn()); // object method
console.log(this); // global this
