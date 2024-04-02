const fs = require('fs');


function SaveNewData(save_new_data){

    fs.writeFile('C:\\Users\\haykz\\OneDrive\\Desktop\\Fu_ll\\adminka\\BackEnd\\JsonProcesing\\users.json', JSON.stringify(save_new_data), 'utf8',(err) => {
        })
}

module.exports = SaveNewData