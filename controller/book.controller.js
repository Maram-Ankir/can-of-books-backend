'use strict';

const { userModel } = require('../models/user.model');

const getbooks = (request, response) => {

    const { email } = request.query;
    // console.log(request.query);
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            response.json(userData)
        }
    });
}

///////////////////////////////////////////////////////
const createBook = (request, response) => {

    const { userEmail, bookName, description, status } = request.body;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            console.log('bookname',bookName)
            userData.books.push({ name: bookName, description: description, status: status });
            userData.save();
            response.json(userData);
        }
    });
}


/////////////////////////////////////////////////
const updateBook = (request, response) => {

    const { userEmail, bookName, description, status } = request.body;
    const bookIndex = request.params.book_idx;

    userModel.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
            const index=userData.books.findIndex(val=>val._id===bookIndex)
            userData.books.splice(index, 1, { name: bookName, description: description, status: status });
            userData.save();
            response.json(userData);
        }
    });
}


//////////////////////////////////////////////////
const deleteBook = (request, response) => {

    const { email } = request.query;
    const bookIndex = request.params.book_idx;
    // console.log(request.query);
    // console.log(request.params.book_idx);
    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error)
        } else {
        const index=userData.books.findIndex(val=>val._id===bookIndex)
            userData.books.splice(index, 1);
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

