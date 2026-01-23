const express = require("express");
const router = express.Router();
const Book = require("../models/bookSchema.js");

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});
router.post("/", async (req, res) => {
  const { bookId, bookName, price, author } = req.body;
  const newBook = new Book({ bookId, bookName, price, author });
  await newBook.save();
  res.json({ message: "Book added successfully" });
});
router.put("/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book updated successfully", book: updatedBook });
});
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted successfully" });
});
module.exports = router;
