const express = require('express')
const calcRouter = require('./routers/calculator');


const app = express()

app.use(express.json())

app.use('/calc', calcRouter)


app.get('/', (req, res) => {
    res.send('<h1> Hello world </h1>')
    console.log('new request by:', req.ips)
})


app.listen(3000, () => console.log('listening on port 3000'))



