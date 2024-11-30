function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Calling greet function with a callback
  greet('Alice', sayGoodbye);
  