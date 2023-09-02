const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1> Hello world </h1>')
    console.log('new request by:', req.ips)
})

app.post('/add', (req, res) => {
    res.send(`<h1> sum: ${req.body.num1 + req.body.num2} </h1>`)
})

app.listen(3000, () => console.log('listening on port 3000'))



