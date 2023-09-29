import express from 'express'
import userRouter from './routes/user'
import mongoose from 'mongoose'
require("dotenv").config();

const app = express();

const connectionString: string = process.env.CONNECTION_STRING || "";

mongoose.connect(connectionString)
    .catch( err => console.log(err, "error") )
    .then( () => {
        console.log(`connected to database`)
        app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`)) 
    })


app.use(express.json()); 
app.use('/user', userRouter); 
app.get('/', (req, res) => { res.send("hello world") })

