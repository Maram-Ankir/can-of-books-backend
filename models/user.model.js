'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./cat.model');


// Here we are creating a new schema obj, which will be used later on to generate the model
const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

// generate the model based on the schema
const userModel = mongoose.model('users', userSchema);


const seedUserData = () => {
    const newUser = new userModel({
        email: 'maramankir5@gmail.com',
        books: [
            { name: '' },
            { description: '' },
            { status: '' },
            { name: '' },
            { description: '' },
            { status: '' },
            { name: '' },
            { description: '' },
            { status: '' }

           
        ]
    });

    // console.log(newUser);

    newUser.save();

}

module.exports = userModel;
