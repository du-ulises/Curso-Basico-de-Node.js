const greet = require('./src/greet')

greet.emit('clap')
greet.emit('shout', 'I LIKE')
greet.emit('call', 'Diego Ulises', name => {
    console.log(`Estamos llamando a ${name}`)
})