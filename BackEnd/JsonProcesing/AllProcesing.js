const ReadFile = require('./ReadFile.js')
const SaveNewData = require('./SaveNewData.js')
const AddUser  = require('./AddUser.js')
const DeleteUser = require('./DeleteUser.js')
const EditUser = require('./EditUser.js')

function AllProcesing(proces){
    console.log(proces,'procces')
    switch(proces.title ){
        case 'read':
            return  ReadFile()
            break
        case 'Add':
            AddUser(ReadFile,SaveNewData,proces.data)
            break
        case 'Edit':
        EditUser(ReadFile,SaveNewData,proces.data)
        break
        case  'Delete':
        DeleteUser(ReadFile,SaveNewData,proces.data)
        break
    }

}
module.exports = AllProcesing