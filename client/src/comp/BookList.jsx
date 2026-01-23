import axios from "axios";

import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/books")
      .then((res) => {
        // If backend returns { data: [...] }
        const data = Array.isArray(res.data) ? res.data : res.data.data;
        setBooks(data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.price}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
