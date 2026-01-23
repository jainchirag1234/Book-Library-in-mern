const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  bookId: { type: Number },
  bookName: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
});
module.exports = mongoose.model("Book", bookSchema);
