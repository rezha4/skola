const express = require("express");
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
  getAllUsers,
} = require("../services/userService");
const router = express.Router();

// Route to get user by id
router.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.render("users", { users });
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await getUser(id);
  if (user) {
    res.render("user", { user });
  } else {
    res.status(404).send("User not found");
  }
});

// Route to create a new user
router.post("/", async (req, res) => {
  const { name, password } = req.body;
  const user = await postUser({ name, password });
  res.status(201).redirect(`/user/${user.id}`);
});

// Route to update a user
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  const user = await putUser(id, data);
  res.redirect(`/user/${user.id}`);
});

// Route to delete a user
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await deleteUser(id);
  res.redirect("/");
});

module.exports = router;
