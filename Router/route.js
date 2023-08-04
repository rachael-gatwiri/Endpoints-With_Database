const {Router} = require('express'); 
const { createNotebook, getAllNoteBook, getSingleNoteBook, updateNoteBook, deleteNoteBook } = require('../Controlls/controllers');
const NoteBookrouter = Router(); 

NoteBookrouter.post('/', createNotebook); 
NoteBookrouter.get('/', getAllNoteBook);
NoteBookrouter.get('/:id', getSingleNoteBook);
NoteBookrouter.put('/:id', updateNoteBook);
NoteBookrouter.delete('/:id', deleteNoteBook);


module.exports = NoteBookrouter 