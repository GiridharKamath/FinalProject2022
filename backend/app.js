require("dotenv").config();
const userRouter = require('./controllers/userController')
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require("body-parser"); //convert json file to normal texts
const mongoose = require("mongoose");
const morgan = require("morgan")

//DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true
  })
  .then((db) => {
    console.log("Connected to the database successfully!");
  })
  .catch((err) => {
    console.log("ERROR! couldn't connect to the database");
  });

app.get('/', (req, res) => {
  res.send('Ho World!')
})

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRouter)

app.use(morgan("dev"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})