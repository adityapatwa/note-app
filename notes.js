console.log('Starting notes.js');

/*module.exports.age = 26;
module.exports.add = (a, b) => {
    return a+b;
}*/
const fs = require('fs');

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
};c

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
        console.log(`Added note with\nTitle: ${title} and \nBody: ${body}`);
    } else {
        console.log(`Note with 'Title: ${title}' already exists`);
    }
};

let readNote = (title) => {
    if (title) {
        console.log(`Reading note with title: ${title}`);
    } else {
        console.log('No title provided');
    }
};

let removeNote = (title) => {
    if (title) {
        console.log(`Removing note with title: ${title}`);
    } else {
        console.log('No title provided');
    }

};

let getAll = () => {
    console.log('Fetching all notes');
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};