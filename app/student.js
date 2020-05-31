const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SteduntSchema = new Schema({
    name : String
});

const Student = mongoose.model('student', SteduntSchema);

//export
module.exports =Student;