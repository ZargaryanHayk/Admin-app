
 function DeleteUser(ReadFile,SaveNewData, idForDelet){

    


    let dataToJson =  ReadFile()

        let newData = dataToJson.Users.filter((data)=>{
            
            if (data.id.toString() != idForDelet.d.toString()) {
                return data

            }})
        let save_new_data = {}
        
        save_new_data.Users = newData
        save_new_data.lastid = dataToJson.lastid
        SaveNewData(save_new_data)
    }



module.exports = DeleteUser