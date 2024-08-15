const express = require("express");
const cors = require("cors");
const controller = require('./controller');

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/users', controller.getUser);

app.post('/adduser', controller.addUser);

app.post('/updateuser', controller.updateUser);

app.post('/deleteuser', controller.deleteUser);

module.exports = app;
