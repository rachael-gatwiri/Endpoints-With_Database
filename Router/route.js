const {Router} = require('express'); 
const { createNotebook, getAllNoteBook, getSingleNoteBook, updateNoteBook, deleteNoteBook } = require('../Controlls/controllers');
const NoteBookrouter = Router(); 

projectrouter.post('/', createNotebook); 
projectrouter.get('/', getAllNoteBook);
projectrouter.get('/:id', getSingleNoteBook);
projectrouter.put('/:id', updateNoteBook);
projectrouter.delete('/:id', deleteNoteBook);


module.exports = {  
    NoteBookrouter
}