// app.js
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes'); // Import the blog routes

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Set view engine and views directory
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views/blogs'));//
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Welcome Home!");
})

// Serve static files from the 'public' folder
//app.use(express.static(path.join(__dirname, 'public')));

// Use blog routes for handling blog-related requests
app.use('/blogs', blogRoutes);

module.exports = app;
