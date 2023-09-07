//note that node js also provides bunch of core modules and one of the core module is events
// when we are using core module we dont need to provide the path for that. just the module name is enough.
const events = require('events');

//we can use event emitter to create events
/*event listerner is similar to jquery 
eg: 
   elements.on('click', function(){

   })
*/

const myEmitter  = new events.EventEmitter;

myEmitter.on('test', function(arg){
    console.log(arg);
});

myEmitter.emit('test','hello world');