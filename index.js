const server = require('http').Server()
const io = require('socket.io')(server)
const port = require('./config').SERVER_PORT

const banner = `
********************************************
    Basic Node.js Course
    Course Project
    Tic Tac Toe Server
********************************************
Status: OnLine
Listening on port: ${port}
`

io.on('connection', (socket) => {
    socket.on('register', (user) => {
        console.info(`User registered: ${user.name}`)
    })
})

server.listen(port, () => {
    console.info(banner)
})