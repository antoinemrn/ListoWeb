const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./ressources/tasks.json');
const Todo = require('./models/todo');

const app = express();


mongoose.connect('mongodb+srv://listo_admin:Q5RAd8QgDcnxDdMb@cluster0.tgccr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée  : ' + error));

app.use(express.json());
app.use(express.raw());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.post('/api/todos', (req, res, next) => {
  delete req.body._id;
  const todo = new Todo({
    ...req.body
  });
  todo.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.use('/api/todos', (req, res, next) => {
    res.status(200).json(tasks);
});

module.exports = app;