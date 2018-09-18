const fs = require('fs');

let printNote = (title, body) => {
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
};

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        console.log(e);
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {title, body};
    let duplicateNotes = [];

    if (notes.length !== 0) {
        duplicateNotes = notes.filter((note) => note.title === title);
    }


    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        printNote(title, body);
    } else {
        console.log(`Note with 'Title: ${title}' already exists`);
    }
};

let readNote = (title) => {
    if (title) {
        let notes = fetchNotes();
        let filteredNote = notes.filter((note) => note.title === title);
        if (filteredNote.length !== 0) {
            printNote(filteredNote[0].title, filteredNote[0].body);
        } else {
            console.log('The note does not exist.')
        }
    } else {
        console.log('No title provided');
    }
};

let removeNote = (title) => {
    let notes = fetchNotes();
    if (title && notes.length !== 0) {
        let newNotes = notes.filter((note) => note.title !== title);
        if (notes.length === newNotes.length) {
            console.log(`The note with title ${title} does not exist.`);
        } else {
            console.log(`Removing note with title: ${title}`);
            saveNotes(newNotes);
        }
    } else {
        console.log('No title provided');
    }
};

let getAll = () => {
    console.log('Fetching all notes');
    let notes = fetchNotes();
    if (notes.length !==0) {
        notes.forEach((note) => {
           printNote(note.title, note.body);
        });
    } else {
        console.log('No notes exists.');
    }
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};