'use strict';

const { userModel } = require('../models/user.model');

const getbooks = (request, response) => {

    const { email } = request.query;

    userModel.findone({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            response.json(userData)
        }
    });
}


///////////////////////////////////////////////////////
const createBook = (request, response) => {

    const { userEmail, bookName } = request.body;

    userModel.findone({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.push({ name: bookName });
            userData.save();
            response.json(userData);
        }
    });
}


/////////////////////////////////////////////////
const updateBook = (request, response) => {

    const { userEmail, bookName } = request.body;
    const bookIndex = request.params.book_idx;

    userModel.findone({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1, { name: bookName });
            userData.save();
            response.json(userData);
        }
    });
}


//////////////////////////////////////////////////
const deleteBook = (request, response) => {

    const { userEmail } = request.query;
    const bookIndex = request.params.book_idx;


    userModel.findone({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            userData.cats.splice(bookIndex, 1);
            userData.save();
            response.json(userData)
        }
    });
}



module.exports = {
    getbooks, createBook,
    updateBook,
    deleteBook
};

