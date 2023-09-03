const express = require('express');
const PORT = 3000

const app = express();

app.use((req, res) => {
    res.send('middleware')
})


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))