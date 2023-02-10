const path = require('path');
const router = require('express').Router();

// Write out endpoint for getting notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Write out endpoint for getting index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;