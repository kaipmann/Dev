// function fetchData() {
//     return new Promise(
//         (resolve, reject) => {
//       // Simulate an asynchronous operation
//             setTimeout(
//                 () => {
//                     resolve('Data fetched successfully');
//                     // reject('data not found');
//                 }, 1000
//             );
//         }
//     );
//   }
  
  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('data is fetched successfully'); }, 5000); 
    });
  }
  // Using the promise
  fetchData().then((message) => {
    console.log(message); // Output: Data fetched successfully
  });
  