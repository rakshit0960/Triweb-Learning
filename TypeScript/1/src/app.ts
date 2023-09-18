import express from 'express';
import userRoute  from './routes/userRoute';

require("dotenv").config();

const app = express();

app.use('/user', userRoute);


app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));