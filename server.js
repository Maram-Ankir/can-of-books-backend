const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const { seedUserData } = require('./models/user.model');

const { getbooks,
    createBook,
    updateBook,
    deleteBook } = require('./controller/book.controller');

const cors = require('cors');

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true });

// seedUserData();

app.get('/books', getbooks);

app.post('/book', createBook);

app.delete('/book/:book_idx', deleteBook)

app.put('/book/:book_idx', updateBook);




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});