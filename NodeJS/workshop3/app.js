const express = require('express');
const userRouter = require('./routers/user') 
const PORT = 3000

const app = express();


app.use(express.json())

app.use('/user', userRouter)


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))