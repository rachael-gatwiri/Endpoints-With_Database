
const {v4} = require('uuid');  
const { NoteBookTable } = require('../Db/table');



const notebooks = []; 

class NoteBook{
    constructor(id, Title, Content, CreatedAt){
        this.id = id,
        this.Title = Title,
        this.Content = Content,
        this.CreatedAt = CreatedAt
    }
}



const createNotebook = async(req, res)=>{  
    try {
        NoteBookTable()
        const id = v4()

        const {Title, Content, CreatedAt} = req.body 

        const newNoteBook = {id, Title, Content, CreatedAt}

        notebooks.push(newNoteBook) 

        if (notebooks.length > 0) {
            res.json({
              message: "Notebook created Successfully",
                // project: newNoteBook
            });

            // console.log(notebooks)
          } else {
            res.json({
              message: "Notebook creation failed"
            });
          }
        } catch (error) {
          return res.json({ error });
        }
      };
      





const getAllNoteBook = async(req, res)=>{
    try {
        res.json({notebooks: notebooks})
    } catch (error) {
        return res.json({error})
    }
}

const getSingleNoteBook = async(req, res)=>{
    try {
        const id = req.params.id

        console.log(id);

        const notebook = notebooks.filter(el =>el.id == id)

        res.json({
            notebook
        })
    } catch (error) {
        return res.json({error})
    }
}



const updateNoteBook = async(req, res)=>{
    try {
        const id = req.params.id

        const {Title, Content, CreatedAt} = req.body

        const  notebook_index = notebooks.findIndex( notebook =>  notebook.id == id)

        if( notebook_index < 0){
            res.json('Project not found')
        }else{
            notebooks[ notebook_index] = new NoteBook(id, Title, Content, CreatedAt)
        }

        res.json({
            message: 'Notebook updated successfully',
            // notebook: notebooks[project_index]
        })
    } catch (error) {
        return res.json({Error: error})
    }
}



const deleteNoteBook = async (req, res)=>{
    try {
       const id = req.params.id

       let  notebook_index =  notebooks.findIndex( notebook =>  notebook.id == id);

       console.log( notebook_index);

       if( notebook_index < 0){
            res.json({message: 'Project Not found'})
       }else{
        notebooks.splice( notebook_index, 1)
       }

       res.json({
            message: 'Project Deleted Succesfully'
       })
    } catch (error) {
        return res.json({Error: error})
    }
}

module.exports ={
    createNotebook,
    getAllNoteBook,
    getSingleNoteBook,
    updateNoteBook,
    deleteNoteBook
}