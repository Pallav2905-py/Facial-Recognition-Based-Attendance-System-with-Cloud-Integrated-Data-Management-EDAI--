const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    date: String,
    time:Float32Array,
    email: String,
})

const Attendance = new mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;