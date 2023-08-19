const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./controllers/authController')(app);

app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});