const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Estoy en la ruta home')
})

app.get('/app', (req, res) => {
    res.send('Estoy en la ruta /app')
})

app.get('*', (req, res) => {
    res.send('No existe recurso definido')
})

app.listen(port, () => {
    console.log(`Server working at port: ${port}`)
})
