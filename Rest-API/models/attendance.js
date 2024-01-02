const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    date: String,
    time: Array,
    email: String,
})

const Attendence = new mongoose.model('Attendance', attendanceSchema);

module.exports = Attendence;