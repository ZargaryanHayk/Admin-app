



 function EditUser(ReadFile, SaveNewData, edituser){
    let newData = {}
    let dataToJson =   ReadFile()
    newData.Users = dataToJson.Users.map((item) =>{
        if(item.id == edituser.id){
            return edituser
        }else{
            return item
        }
})
    newData.lastid = dataToJson.lastid
    SaveNewData(newData)
}

module.exports = EditUser