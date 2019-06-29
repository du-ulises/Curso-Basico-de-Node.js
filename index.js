const fs = require('fs')
const opc = require('./src/fileops')

fs.readFile('./resources/number.txt', 'utf8', (err, text) => {
    if (err) throw err
    const number = text.split('\n').map(n => Number(n))
    //console.log(number)
    incValues = opc.incrementValues(number)
    fs.writeFile('./resources/numbernew.txt', incValues.join('\n'), (err, result) => {
        if (err) throw err
    })
})

fs.readFile('./resources/name.txt', 'utf8', (err, text) => {
    if (err) throw err
    const names = text.split('\n')
    mapCall = opc.callNames(names)
    fs.writeFile('./resources/namenew.txt', mapCall.join('\n'), (err, result) => {
        if (err) throw err
    })
})