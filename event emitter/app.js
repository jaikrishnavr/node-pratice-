//note that node js also provides bunch of core modules and one of the core module is events
// when we are using core module we dont need to provide the path for that. just the module name is enough.

// Import the 'events' module in Node.js
const events = require('events');

//we can use event emitter to create events
/*event listerner is similar to jquery 
eg: 
   elements.on('click', function(){

   })
*/

// Create a new event emitter object named 'myEmitter'
const myEmitter  = new events.EventEmitter;

// Register an event listener for the 'test' event
myEmitter.on('test', function(arg){
    // When the 'test' event is emitted, this callback function is executed,
    // and it logs the 'arg' parameter to the console.
    console.log(arg);
});

// Emit the 'test' event with the argument 'hello world'
myEmitter.emit('test','hello world');