console.log('Starting app.js');

const fs = require('fs'); // File System module
const _ = require('lodash');// lodash Module
const argv = require('yargs').argv;

//const os = require('os');Operating System module

const notes = require('./notes');// Custom Module

//var user = os.userInfo();

//console.log("Result : ", notes.add(4, 6));

// console.log(notes.age);

//Using future proof syntax i.e. the signature with the callback function

/*fs.appendFile('greetings.txt', `Hello ${user.username}! I know you are ${notes.age} old.`, function (err) {
    if (err) {
        console.log('Unable to write to the file.')
    }
});*/

// The tick (`) operator is a ES6 feature that allows us to use template strings.

// console.log(process.argv);

var command = argv._[0];

if (command === 'add') {
    //Add Note
    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
    //List Note(s)
    var result = notes.getAll();

} else if (command === 'read') {
    //Reading Note(s)
    notes.readNote(argv.title);

} else if (command === 'remove') {
    //Remove Note(s)
    notes.removeNote(argv.title);

} else {
    console.log('Command not found');
}