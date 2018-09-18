// console.log('Starting app.js');

// const fs = require('fs'); File System module
// const os = require('os'); Operating System module
// const _ = require('lodash'); lodash Module

//let user = os.userInfo();

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
const titleOptions = {
    describe: 'Title for the note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const argv = require('yargs')
    .command('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all the notes')
    .command('read', 'Read a note with the given title', {
        title: titleOptions
    })
    .command('remove', 'Remove a note with the given title', {
        title: titleOptions
    })
    .help()
    .argv;

const notes = require('./notes');// Custom Module

let command = argv._[0];

if (command === 'add') {
    //Add Note
    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
    //List Note(s)
    notes.getAll();

} else if (command === 'read') {
    //Reading Note(s)
    notes.readNote(argv.title);

} else if (command === 'remove') {
    //Remove Note(s)
    notes.removeNote(argv.title);

} else {
    console.log('Command not found');
}