const mongooose = require('mongoose');
const Schema = mongooose.Schema;

mongooose.connect('mongodb://localhost/tododb');

var todoSchema = new Schema({
    event: String,
    description: String 
});

var Todo = mongooose.model('Todo',todoSchema);

module.exports = Todo;