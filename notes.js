const fs = require('fs');

const fetchNotes = function (){
  try{
    var notesSrting = fs.readFileSync('notes-data.json');
    return JSON.parse(notesSrting);
  }catch (e){
    return [];
  }
};

const saveNotes = function (notes){
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = function(title, body){
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

const duplicateNotes = notes.filter(function(note){
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = function(){
  return fetchNotes();
};

const readNote = function(title){
  let notes = fetchNotes();
  let filterNotes = notes.filter(function (note){
    return note.title === title;
  });
  return filterNotes[0];
};

const removeNote = function(title){
  let notes = fetchNotes();
  let filterNotes = notes.filter(function (note){
    return note.title !==title
  });
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
};

const logNote = function (note){
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
