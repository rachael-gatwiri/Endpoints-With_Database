const mssql = require('mssql')  
const dotenv = require('dotenv')
dotenv.config() 


const sqlConfig = {
    user: 'sa',
    password: 'Tems1234',
    database: 'EndpointsWithDatabase',
    server: 'localhost',
    pool: {
        max : 10,  //bydefault is always 10
        min : 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: false,
    }
    
}
mssql.connect(sqlConfig).then(pool =>{   
    if(pool.connected){  
        console.log('connected to db ...');
    }
})

// const pool = mssql.connect(sqlConfig)

// module.exports = {
//     sqlConfig
// }