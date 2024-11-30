const myFunction = () => {
    console.log("Start of Function");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Hold 5s');
        resolve('Promise resolved'); // Resolve the promise after the delay
      }, 5000);
    });
    console.log('End of Function');
  }
  
  myFunction().then((message) => {
    console.log(message);
  });
  // Output:
  // Start of Function
  // End of function
  // Hold 5s
  // Promise resolved
  