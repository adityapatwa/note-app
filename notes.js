console.log('Starting notes.js');

/*module.exports.age = 26;
module.exports.add = (a, b) => {
    return a+b;
}*/

var addNote = (title, body) => {
    console.log(`Title: ${title} \nBody: ${body}`);
};

var readNote = (title) => {
    if (title) {
        console.log(`Reading note with title: ${title}`);
    } else {
        console.log('No title provided');
    }
};

var removeNote = (title) => {
    if (title) {
        console.log(`Removing note with title: ${title}`);
    } else {
        console.log('No title provided');
    }

};

var getAll = () => {
    console.log('Fetching all notes');
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};