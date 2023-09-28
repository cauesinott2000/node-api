const express = require('express');
const bodyParser = require('body-parser');

// const router = express.Router();
const app = express();

const Model = require('./models/model');
const Users = require('./models/user');

app.use(bodyParser.json());

require('./controllers/authController')(app);
require('./controllers/projectController')(app);

/*app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});*/

// Get All
app.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    } catch(error){
        res.status(500).json({message: error.message})
    }
});

// Get by ID
app.get('/getById/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


// Método Post
app.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Método Update by ID
app.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Método Delete by ID
app.delete('/delete/:id', async (req, res) => {
    try {
        const id =req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`${data.name} foi deletado(a)...`);
    }
    catch (error) {
        res.status(400).json( {message: error.message })
    }
})

app.listen(8080, () => {
    console.log('listening on port 8080');
});