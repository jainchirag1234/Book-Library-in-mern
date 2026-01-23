import React, { useState } from "react";
import BookForm from "./comp/BookForm";
import BookList from "./comp/BookList";

const App = () => {
  const [reload, setReload] = useState(false);

  const handleAdd = () => setReload(!reload); // trigger reload when a new book is added

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>📘 Book Management System</h1>
      <BookForm onAdd={handleAdd} />
      <BookList key={reload} />
    </div>
  );
};

export default App;
