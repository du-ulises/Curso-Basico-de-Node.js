const call = require('./src/call')

//console.log(call.sync('Diego Ulises'))

//call.withCallback('Diego Ulises', call.sync)

call.withPromise('Diego Ulises')
    .then(name => { console.log(name)})