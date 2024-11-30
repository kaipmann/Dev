const log = (message) => { console.log(message);};

// module.exports = log; // passing a function

module.exports.logger = log; //passing as a object