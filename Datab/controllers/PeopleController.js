const { model } = require("mongoose")
const People = require("../models/People")

// shwo the list of People
const lsitof = (req,res,next)=>{
    People.find()
    .then(r=>{
        res.json(r)
    })
    .catch(e=>{
        res.json(e)
    })
}

const user = (req,res)=>{
    console.log('mta')
    findId = req.params.id
    People.findById(findId)
    .then(r=>{
        console.log(r)
        res.json(r)})
    // console.log('stex em ')
}
// add new Person
const store = (req,res,next)=>{
    console.log('add')

    let people = new People({

        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        phonenumber: req.body.phonenumber

    })
    
    people.save()
    res.status(200)
    
}

// update an person 

const update = (req,res,next) =>{

    let personId = req.body.id

    let updateData = {

        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        phonenumber: req.body.phonenumber

    }
    People.findByIdAndUpdate(personId, { $set: updateData })
    .then(()=>{
        res.json({m:"all is ok"})
    })

}
// delet 

const destroy = (req,res,next)=>{
     console.log("mtaa")

    let personId = req.body.id
    People.findByIdAndDelete(personId)
    .then(()=>{
        res.json({m:"all is ok"})
    })

}

module.exports = {
    lsitof,store,update,destroy,user
}