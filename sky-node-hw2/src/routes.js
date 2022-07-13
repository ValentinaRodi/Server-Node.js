const routes = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

routes.get("/users", getUsers);
routes.post("/users", createUser);
routes.get("/users/:id", getUser);
routes.patch("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);

routes.get("/users/:id/books", getBooks);
routes.post("/users/:id/books", createBook);
routes.get("/users/:id/books/:id_book", getBook);
routes.patch("/users/:id/books/:id_book", updateBook);
routes.delete("/users/:id/books/:id_book", deleteBook);

module.exports = routes;
