import express, { NextFunction, Request, Response, response } from 'express'
import userRouter from './routes/user'
import authRouter from './routes/auth'
import mongoose from 'mongoose'
import projectError from './helper/ProjectError'
require("dotenv").config();

const app = express();

declare global {
    namespace Express {
        interface Request {
            userID: string;
        }
    }
}

interface ReturnResponse {
    status: "SUCCESS" | "ERROR";
    message: String;
    data: object;
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


app.use((err: projectError, req: Request, res: Response, next: NextFunction) => {
    let response: ReturnResponse;
    let message: string;
    let statusCode: number;
    if (err.statusCode && err.statusCode  < 500) {
        response = {status:'ERROR', message: err.message, data: {}}
        res.status(err.statusCode);
    } else {
        response = {status:'ERROR', message: "internal server Error!!!, try again later", data: {}}
        res.status(500);
    }
    res.send(response);
})
