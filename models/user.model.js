'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./book.model');



const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('users', userSchema);


function seedUserData() {
    const newUser = new ownerModel({
        ownerEmail: 'maramankir5@gmail.com',
        books: [
            {
                bookName: 'A Tale of Two Cities',
                description: 'A Tale of Two Cities is an 1859 historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette,.',
                status: 'available'
            },
            {
                bookName: 'Half of a Yellow Sun',
                description: 'When Nigerian author Adichie was growing up, the Biafran war “hovered over everything”. Her sweeping, evocative novel, which won the Orange prize, charts the political and personal struggles of those caught up in the conflict and explores the brutal legacy of colonialism in Africa.',
                status: 'available'
            }
        ]
    })

    newUser.save();

}

module.exports = userModel;
