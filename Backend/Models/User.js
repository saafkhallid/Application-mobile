const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = Schema({
    firstName: { type: String,
               require: true },
    lastName: { type: String,
              require: true },
    email: { type: String,
             require: true },
    phone: { type: Number,
              require: true },
    CIN: { type: String,
              require: true },
    role: { type: String, ennum: ['user', 'admin'], default: 'user' }
})

module.exports = model('User', userSchema)