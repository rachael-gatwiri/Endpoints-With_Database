const express = require ('express'); 
const { projectrouter } = require('./Router/route');  

const routeExpress  = express()

routeExpress.use(express.json()) 
routeExpress.use('/R', rou) //import  the project router file

app.use((err, req, res, next)=>{   //method used
    res.json({Error: err})  //utilizing error and response method method
})

app.listen(4500, ()=>{   
    console.log('Server running on port 4500');
})