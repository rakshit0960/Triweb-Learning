import express from 'express'
import userRouter from './routes/user'
import mongoose from 'mongoose'
require("dotenv").config();
const connectionString = "mongodb+srv://root:root@cluster0.fmt2237.mongodb.net/workshopDB?retryWrites=true&w=majority"


const app = express();

mongoose.connect(connectionString)
    .catch( err => console.log(err) )
    .then( () => {
        console.log(`connected to database`)
        app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`)) 
    })


app.use(express.json()); 
app.use('/user', userRouter); 
app.get('/', (req, res) => { res.send("hello world") })

