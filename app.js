const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controller/UserController");

// db instance connection
require("./db");
const app = express();
app.set("view engine","ejs");

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//User Routes
app.post("/app/user",userController.createNewUser)
app.post("/app/user/auth",userController.login)
app.post("/app/sites/:userid",userController.makenote)
app.get("/app/sites/list/:userid",userController.readNotes)

module.exports = app