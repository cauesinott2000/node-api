const express = require('express')
const app = express()
const port = 3000

///////////////
// GET       //
///////////////
app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params) // ex: { "userId": "22", "bookId": "111" }
})

/* '-' e '.' são interpretados literalmente*/
app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params) // ex: { "from": "POA", "to": "SP" }
});

app.get('/plantae/:genus.:species', (req, res) => {
    res.send(req.params)
});


// POST

// PUT

// DELETE

// ALL (executa independente do método)

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
