// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event handler
const eventHandler = () => {
    console.log('An event has occurred!');
};

// Assign the event handler to an event
eventEmitter.on('myEvent', eventHandler);

// Fire the 'myEvent' event
eventEmitter.emit('myEvent');


