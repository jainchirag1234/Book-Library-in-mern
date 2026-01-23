const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/books", bookRoutes);
mongoose
  .connect("mongodb://127.0.0.1:27017/book")
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log("error"));

const PORT = 4000;
app.listen(PORT, () => console.log(`Server are connected at ${PORT}`));
