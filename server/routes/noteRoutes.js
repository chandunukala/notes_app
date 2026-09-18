const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// POST /api/notes
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required." });
    }

    const note = await Note.create({ title, content });
    return res.status(201).json(note);
  } catch (err) {
    console.error("Create note error:", err);
    return res.status(500).json({ message: "Failed to create note." });
  }
});

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (err) {
    console.error("Get notes error:", err);
    return res.status(500).json({ message: "Failed to fetch notes." });
  }
});

// DELETE /api/notes/:id
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found." });
    }

    return res.status(200).json({ message: "Note deleted successfully." });
  } catch (err) {
    console.error("Delete note error:", err);
    return res.status(500).json({ message: "Failed to delete note." });
  }
});

module.exports = router;
