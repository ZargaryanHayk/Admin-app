const fs = require('fs')

function ReadFile(){
    const path = __dirname + '/users.json'
    let data  =  fs.readFileSync(path, { encoding: 'utf8' })
    return JSON.parse(data)
    }

// ReadFile()
module.exports = ReadFile