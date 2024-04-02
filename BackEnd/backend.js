const express = require("express");
const app = express();
const mangoose = require('mongoose')
const PeopleRoute = require('./routes/PeoplePr.js')
const cors = require('cors');
bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mangoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser : true, useUnifiedTopology: true})
const db = mangoose.connection
db.on('error', (e)=>{
    console.log(e)
})

db.once('open', ()=>{
    console.log('db c')
})




app.use('/api', PeopleRoute);
const PORT = 3001;

app.listen(PORT, ()=>console.log('ok'))







//  app.get('/users',    (req,res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const jsonData =   AllProcesing({title:"read"});    
   
//     res.json(jsonData)
// })


// app.delete('/deletuser', async (req, res) => {

//     const idForDelet = req.body
//     await AllProcesing({title:"Delete",data:idForDelet})
//     res.status(200).send('Success!')
// })
    
            


// app.post('/adduser', async (req,res) =>{

//     let addData = req.body;
//     console.log(addData)
//     if(addData){
//        await AllProcesing({title:"Add",data:addData})
//         res.status(200).send('Success!')
//     }
      
// })
  


// app.patch("/edituser", async (req,res) =>{
//     let edituser = req.body
//     await AllProcesing({title:"Edit" ,data:edituser})
//     res.status(200).send('Success!')
// })