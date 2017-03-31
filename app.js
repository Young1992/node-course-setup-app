const fs = require('fs');//load the module functionaility
const _ = require('lodash');//load 3rd party module lodash
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOption = {
  describe: 'Content of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOption,
  body: bodyOption
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOption
})
.command('remove', 'Remove a note', {
  title: titleOption
})
.help()
.argv;

const command = argv._[0];

if(command == 'add'){
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
}else if(command == 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)...`);
  allNotes.forEach(function(note){
    return notes.logNote(note);
  });
}else if (command == 'read') {
  let note = notes.readNote(argv.title);
  if (note) {
    console.log('Note content');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
}else if (command =='remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note was not found';
  console.log(message);
}else {
  console.log('Command note recognised');
}
