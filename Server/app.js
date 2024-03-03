const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const loginRoutes = require("./routes/login");

const app = express();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const port = 8000;

app.use(cors());
app.use(express.json());

app.use(loginRoutes);

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.2tfmflc.mongodb.net/${dbName}`)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
