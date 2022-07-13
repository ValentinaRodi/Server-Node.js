const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const routes = require('./routes');
const loggerMiddleware = require("./middlewares/logger");
const corsMiddleware = require('./middlewares/cors');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/sky-node-4', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});

dotenv.config();

const { PORT = 3005, API_URL = "http://localhost" } = process.env;

const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  if (request.query.hello) {
    response.status(200);
    response.send(`Hello, ${request.query.hello}!`);
  } else {
    response.status(200);
    response.send(`Hello, World!`);
  }
});

// app.get('/users', (request, response) => {
//     response.status(200);
//     response.send(request.params);
// });

// app.get('/users/:id', (request, response) => {
//   response.status(200);
//   response.send(request.params);
// });

// app.get("/users/:id/books", (request, response) => {
//   response.status(200);
//   response.send(request.params);
// });

// app.get("/users/:id/books/:book_id", (request, response) => {
//   response.status(200);
//   response.send(request.params);
// });

app.use('/', corsMiddleware)
app.use('/', loggerMiddleware)
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
