const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// Write out endpoint for getting notes
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

// Write out endpoint for creating a new note
router.post('/notes', (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNotes = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    };
    notes.push(newNotes);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json(notes);
    });
  });
})


// Write out endpoint for deleting a note
router.delete('/notes/:id', (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const newNotes = notes.filter(note => note.id !== req.params.id);
    fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err) => {
      if (err) throw err;
      res.json(newNotes);
    });
  });
});


module.exports = router;