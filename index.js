const http = require('http')
const fs = require('fs')
const port = 3000
const route = './resources/my_page.html'

const server = http.createServer((req,res) => {
    fs.readFile(route,(err, data) => {
        if(err) { console.error(err); return }
        res.end(data)
    })
})

console.log(`Iniciando servidor en el puerto ${port}`)
server.listen(port)