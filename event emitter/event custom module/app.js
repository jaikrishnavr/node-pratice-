// Import required modules
const events = require('events');
const util = require('util');

// Define a constructor function for a "teams" object
const teams = function(name) {
    this.name = name;
};

// Inherit the event emitter properties and methods to the "teams" constructor
util.inherits(teams, events.EventEmitter);

// Create instances of teams with different names
const Arsenal = new teams('Arsenal');
const Juventus = new teams('Juventus');
const Galatasaray = new teams('Galatasaray');

// Create an array containing these team instances
const teamArray = [Arsenal, Juventus, Galatasaray];

// Iterate over each team in the array
teamArray.forEach((team) => {
    // Attach an event listener to each team instance
    team.on('nation', function(nation) {
        // When the 'nation' event is emitted for a team, this function will execute
        console.log(team.name + ' is ' + nation + ' football club');
    });
});

// Emit 'nation' events for each team with a nation parameter
Arsenal.emit('nation', 'English');       // This will trigger the event listener for Arsenal
Juventus.emit('nation', 'Italian');      // This will trigger the event listener for Juventus
Galatasaray.emit('nation', 'Turkish');   // This will trigger the event listener for Galatasaray
