const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || "0.0.0.0";

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
