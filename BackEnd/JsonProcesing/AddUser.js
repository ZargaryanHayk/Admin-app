
function AddUser(ReadFile,SaveNewData, addData){
    console.log('mta add')
    let dataToJson =  ReadFile()
    addData.id = dataToJson.lastid
    dataToJson.Users.push(addData);
    dataToJson.lastid += 1
    SaveNewData(dataToJson)
    

}

module.exports = AddUser