const express = require("express");
const app = express();
const mangoose = require('mongoose')
const PeopleRoute = require('./routes/PeoplePr.js')
const findFreePort = require('find-free-port')
const cors = require('cors');
bodyParser = require('body-parser')
const http = require('http');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config

mangoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser : true, useUnifiedTopology: true})
const db = mangoose.connection
db.on('error', (e)=>{
    console.log(e)
})

db.once('open', ()=>{
    console.log('db c')
})




app.use('/api', PeopleRoute);

// findFreePort(3001,async (err,port)=>{
//     if(err){
//         console.error(err)
//     }
//     const server = http.createServer((req,res)=>{
//         res.writeHead(200)
//     })
//     await require('fs').writeFileSync('.env',`FREE_PORT=${port}`)
//     server.listen(port,()=>{
//         console.log(port)
//     })
// })

const PORT = 3001;

app.listen(PORT, ()=>console.log('ok'))






