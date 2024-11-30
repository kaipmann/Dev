var aPerson = [
  { firstName: 'Ron',
    age: 30,
    address: ['Pune', 'India']
  },
  { firstName: 'Sam',
      age: 35,
      address: ['Dallas', 'US']
  },
  { firstName: 'John',
      age: 20,
      address: ['Dubai', 'UAE']
  }
];
console.log(aPerson);
console.log(typeof(aPerson));

//To transfer this data over API from FE to backend
//We convert this ArrayObject to string format


var jsonData = JSON.stringify(aPerson);
console.log(jsonData);