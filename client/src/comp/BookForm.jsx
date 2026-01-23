import axios from "axios";
import React, { useEffect, useState } from "react";

const BookForm = ({ selectedBook, onSaved }) => {
  const [book, setBook] = useState({
    bookId: "",
    bookName: "",
    price: "",
    author: "",
  });
  useEffect(() => {
    if (selectedBook) {
      setBook(selectedBook);
    } else {
      setBook({ bookId: "", bookName: "", price: "", author: "" });
    }
  }, [selectedBook]);
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (book._id) {
      await axios.put(`http://localhost:4000/api/books/${book._id}`, book);
    } else {
      await axios.post(`http://localhost:4000/api/books`, book);
    }
    setBook({ bookId: "", bookName: "", price: "", author: "" });
    onSaved && onSaved();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="number"
        name="bookId"
        placeholder="Book Id"
        value={book.bookId}
        onChange={handleChange}
        required
      />
      <br></br>
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={book.bookName}
        onChange={handleChange}
        required
      />
      <br></br>
      <input
        type="number"
        name="price"
        placeholder="price"
        value={book.price}
        onChange={handleChange}
        required
      />
      <br></br>
      <input
        type="text"
        name="author"
        placeholder="author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <br></br>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
