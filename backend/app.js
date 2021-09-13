const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./ressources/tasks.json');

const app = express();


mongoose.connect('mongodb+srv://listo_admin:Q5RAd8QgDcnxDdMb@cluster0.tgccr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/todos', (req, res, next) => {
    res.status(200).json(tasks);
});

module.exports = app;