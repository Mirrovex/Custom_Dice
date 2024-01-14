let fs = require('fs')
console.log(JSON.parse(fs.readdirSync('./module.json', 'utf8')).version)