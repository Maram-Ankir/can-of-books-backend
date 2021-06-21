const express = require('express') 
const app = express() 
const mongoose = require('mongoose');
require('dotenv').config();
const seedUserData = require('./models/user.model')
const getBooks = require('./controller/book.controller');
const cors = require('cors'); 
app.use(cors())

const PORT = process.env.PORT;
// connect to mongo db using mongoose
mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// seedUserData();

app.get('/cats', getCats)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});