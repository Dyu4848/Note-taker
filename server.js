const { Router } = require('express');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Middleware for parsing JSON and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// // GET Route for homepage
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// // GET Route for notes
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);

module.exports = app;