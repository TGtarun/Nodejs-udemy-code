const fs = require('fs')
const databuffer = fs.readFileSync('1-JSON.json')
const dataJSON = databuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'tarun'
data.age = 18
fs.writeFileSync('1-json.json',JSON.stringify(data))