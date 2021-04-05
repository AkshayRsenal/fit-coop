const mongoose = require('mongoose');
const router = require('express').Router();

const Schema = mongoose.Schema;

const user_collSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    emailid:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 6
    },
    extra:{ type:String }, status: {type: String, required: true},
}, {
    timestamps: true,
});



const User = mongoose.model('User', user_collSchema);

module.exports = User;

