const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('hello,World')
})

app.listen(port, () => {
    console.log('express app listning on port ${port}')
})
