import express from 'express'
import userRouter from './routes/user'
import authRouter from './routes/auth'
import mongoose from 'mongoose'
require("dotenv").config();

const app = express();

declare global {
    namespace Express {
        interface Request {
            userID: string;
        }
    }
}

// mongoDB connection string
const connectionString: string = process.env.CONNECTION_STRING || "";

// connecting to Database
mongoose.connect(connectionString)
    .catch(err => console.log(err, "error"))
    .then(() => {
        console.log(`connected to database`)
        app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`))
    })

// middlewares
app.use(express.json());

// routes
app.use('/user', userRouter, authRouter);
app.get('/', (req, res) => { res.send("hello world") })

