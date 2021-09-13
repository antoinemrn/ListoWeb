const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({    
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: {type: Date, required: true},
    timeLeft: {type: Number, required: true},
    duration: {type: Number, required: true}
});

module.exports = mongoose.model('Todo', todoSchema);