const express = require ('express'); 
const { projectrouter } = require('./Router/route');  

const routeExpress  = express()

routeExpress.use(express.json()) 
routeExpress.use('notebooks', NoteBookrouter) //import  the project router file

app.use((err, req, res, next)=>{   
    res.json({Error: err})  
})

app.listen(4000, ()=>{   
    console.log('Server running on port 4000');
})