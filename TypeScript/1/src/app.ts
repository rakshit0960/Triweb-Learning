const express = require("express");
const userRoute = require('./routes/userRoute');
require("dotenv").config();

const app = express();
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('hello world');
    console.log('req receved');
});

app.listen(process.env.PORT, () => console.log(`listening on http://localhost:${process.env.PORT}`));