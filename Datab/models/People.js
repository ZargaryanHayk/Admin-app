const mongoose =  require('mongoose')
const Schema = mongoose.Schema


const peopleSchema = new Schema({
    name:{
        type:String
    },
    surname:{
        type:String
    },
    mail:{
        type:String
    },
    phonenumber:{
        type:String
    }
})

const People = mongoose.model("People", peopleSchema)
module.exports = People