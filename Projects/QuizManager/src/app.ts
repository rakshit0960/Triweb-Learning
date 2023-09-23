import express from 'express'
import userRouter from './routes/user'  

require("dotenv").config();

const URI = "mongodb+srv://root:<password>@cluster0.fmt2237.mongodb.net/?retryWrites=true&w=majority"

const app = express();
app.use(express.json()); // parse body to json

app.use('/user', userRouter); // handle user route



app.get('/', (req, res) => {res.send("hello world")})

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`))