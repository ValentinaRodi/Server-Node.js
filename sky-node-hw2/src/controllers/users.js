const User = require("../models/user");

// Получем всех пользователей из БД
const getUsers = (req, res) => {
  return User.find({}).then((users) => res.status(200).send(users));
};

// Получем пользователя по ID
const getUser = (req, res) => {
  const { id } = req.params;
  return User.findById(id).then((user) => {
    res.status(200).send(user);
  });
};

// Создаем пользоователя
const createUser = (req, res) => {
  return User.create({ ...req.body }).then((user) => {
    res.status(201).send(user);
  });
};

// Обновляем пользоователя
const updateUser = (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, { ...req.body })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500);
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((dbResponse) => {
      res.status(200).send(dbResponse);
    })
    .catch((e) => {
      res.status(500);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

// const users = require('../data/users.json');

// const getUsers = (req, res, next) => {
//     res.status(200)
//     res.send(users);
// }

// const getUser = (req, res, next) => {
//     if(!users[req.params.id-1]) {
//         res.status(404)
//         res.send('User not found');
//         return
//     }
//     res.status(200)
//     res.send(users[req.params.id-1]);
// }

// const createUser = (req, res, next) => {
//     res.status(201)
//     res.send(req.body);
// }

// module.exports = {
//     getUsers,
//     getUser,
//     createUser
// }
