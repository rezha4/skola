const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || "0.0.0.0";

app.set("views", "./src/views");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
